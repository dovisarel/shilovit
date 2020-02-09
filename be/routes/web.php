<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\EmulateUser;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
// use Illuminate\Support\Facades\Gate;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/initialData', function (Request $request) {
    $emulateUserId = EmulateUser::getId();

    $emulateUser = User::find($emulateUserId);

    return [
        'success' => true,
        'message' => 'initial data',
        'isAuth' => Auth::check(),
        'user' => $emulateUser,
        'isAdmin' => Gate::allows('is-admin'),
        'csrfToken' => csrf_token(),
    ];
});

Route::middleware('guest')->post('/user/register', function (Request $request) {
    $validatedData = $request->validate([
        'id_card' => 'bail|required|min:8|max:9|luhn|unique:users',
        'name' => 'bail|required|min:5|max:50|unique:users',
        'email' => 'bail|required|min:6|max:50|email:rfc|unique:users',
        'password' => 'bail|required|min:6|max:20',
    ]);

    $user = User::create([
        'password' => Hash::make($validatedData['password']),
    ] + $validatedData);

    return [
        'message' => 'משתמש חדש נוצר בהצלחה',
    ];
});

Route::middleware('guest')->post('/user/login', function (Request $request) {
    $credentials = $request->validate([
        'id_card' => 'bail|required|min:8|max:9|luhn',
        'password' => 'bail|required|min:6|max:20',
    ]);

    $rememberMe = $request->input('rememberMe');

    if (!Auth::attempt($credentials, $rememberMe)) {
        abort(403, 'ת.ז. או הססמה אינם נכונים.');
    }

    $request->session()->regenerate();

    return [
        'success' => true,
        'message' => 'משתמש התחבר בהצלחה',
    ];
});

Route::match(['get', 'post'], '/user/logout', function (Request $request) {
    Auth::logout();
    EmulateUser::forget();

    return [
        'success' => true,
        'message' => 'משתמש התנתק בהצלחה',
    ];
});


Route::middleware('auth')->post('/user/emulateUser', function (Request $request) {
    Gate::authorize('is-admin');

    $validatedData = $request->validate([
        'id' => 'bail|required|integer|min:1|exists:users',
    ]);
    
    EmulateUser::setId($validatedData['id']);

    return [];
});


Route::middleware('auth')->post('/user/forgetEmulateUser', function (Request $request) {
    EmulateUser::forget();

    return [];
});

Route::middleware('auth')->get('/user/getList', function (Request $request) {
    Gate::authorize('is-admin');

    return [
        'users' => User::all(),
    ];
});

Route::middleware('auth')->get('/user/getList.csv', function (Request $request) {
    Gate::authorize('is-admin');

    $users = User::all();

    $f = fopen('php://memory', 'r+');

    fputcsv($f, array_map(function($txt){
        return mb_convert_encoding($txt, 'ISO-8859-8', 'UTF-8');
    }, [
        'id' => 'id',
        'id_card' => 'ת.ז.',
        'name' => 'שם',
        'email' => 'מייל',
        'yearLeft' => 'חלק מהשנה שעבר',
        'year_type_1' => 'לימוד',
        'year_type_2' => 'שיעורים - הרב יזהר',
        'year_type_3' => 'שיעורים - הרב מלמד',
        'year_type_4' => 'מבחנים',
        'year_type_5' => 'שקידה',
    ]));

    foreach ($users as $user) {
        $summary = App\Activity::getSummary($user->id, 2020);

        fputcsv($f, [
            'id' => $user->id,
            'id_card' => $user->id_card,
            'name' => mb_convert_encoding($user->name, 'ISO-8859-8', 'UTF-8'),
            'email' => $user->email,
            'yearLeft' => Arr::get($summary, 'metadata.yearLeft'),
            'year_type_1' => (float) (Arr::get($summary, 'summary.total.1.sum') / 60 / 60),
            'year_type_2' => (int) Arr::get($summary, 'summary.total.2.sum'),
            'year_type_3' => (int) Arr::get($summary, 'summary.total.3.sum'),
            'year_type_4' => (int) Arr::get($summary, 'summary.total.4.sum'),
            'year_type_5' => (float) (Arr::get($summary, 'summary.total.5.sum') / 60 / 60),
        ]);
    }

    rewind($f);
    $csv = rtrim(stream_get_contents($f));

    return response($csv)
        ->withHeaders([
            'Cache-Control' => 'must-revalidate, post-check=0, pre-check=0',
            'Content-Encoding' => 'UTF-8',
            'Content-type' => 'text/csv; charset=UTF-8',
            'Content-Disposition' => 'attachment; filename=users.csv',
            'Expires' => '0',
            'Pragma' => 'public',
        ]);
});

Route::middleware('auth')->get('/activities/list', function (Request $request) {
    $user_id = EmulateUser::getId();
    // $validatedData = $request->validate([
    //     'id_card' => 'bail|required|min:8|max:9|luhn|unique:users',
    //     'name' => 'bail|required|min:5|max:50|unique:users',
    //     'email' => 'bail|required|min:6|max:50|email:rfc|unique:users',
    //     'password' => 'bail|required|min:6|max:20',
    // ]);

    // $activities = App\Activity::all();

    $activities = App\Activity::where('user_id', $user_id)
        ->orderBy('time_start', 'asc')
        ->get();

    return [
        'activities' => $activities,
    ];
});


Route::middleware('auth')->post('/activities/add', function (Request $request) {
    $validatedData = $request->validate([
        'activityType' => 'bail|required|min:1|max:9',
        'date' => 'bail|required|date|after_or_equal:2019-11-01|before_or_equal:tomorrow',
        'startTime' => 'bail|nullable',
        'endTime' => 'bail|nullable',
        'options.score' => 'bail|nullable|required_if:activityType,4|numeric|integer|min:0|max:100',
        'options.testId' => 'bail|nullable|required_if:activityType,4|numeric|integer|min:0',
    ]);

    $activity = new App\Activity;

    $activity->user_id = EmulateUser::getId();;
    $activity->type_id = $validatedData['activityType'];
    $activity->time_start = date_create($validatedData['date'] . ' ' . $validatedData['startTime']);

    if ($validatedData['endTime']) {
        $activity->time_end = date_create($validatedData['date'] . ' ' . $validatedData['endTime']);
    }

    $temp_options = $activity->options;

    if ($validatedData['activityType'] == App\Activity::TYPE_MONTHLY_TEST) {
        $temp_options['testId'] = Arr::get($validatedData, 'options.testId', 0);
        $temp_options['score'] = Arr::get($validatedData, 'options.score', 0);
    }
    $activity->options = $temp_options;

    // return $activity;

    $activity->save();

    return [
        'activity' => $activity,
    ];
});

Route::middleware('auth')->post('/activities/delete', function (Request $request) {
    $validatedData = $request->validate([
        'id' => 'bail|required|numeric|min:1',
    ]);

    $activity = App\Activity::findOrFail($validatedData['id']);

    if ($activity->user_id != EmulateUser::getId()) {
        abort(403, 'הדיווח הזה לא שייך לך, ולכן אי אפשר למחוק אותו.');
    }

    $activity->delete();

    return [
        
    ];
});

Route::middleware('auth')->get('/activities/getSummary', function (Request $request) {
    $user_id = EmulateUser::getId();

    // $validatedData = $request->validate([
    //     'id_card' => 'bail|required|min:8|max:9|luhn|unique:users',
    //     'name' => 'bail|required|min:5|max:50|unique:users',
    //     'email' => 'bail|required|min:6|max:50|email:rfc|unique:users',
    //     'password' => 'bail|required|min:6|max:20',
    // ]);

    $summary = App\Activity::getSummary($user_id, 2020);

    return [
        'activities' => $summary['items'],
        'summary' => $summary['summary'],
        'weeks' => $summary['weeks'],
        'metadata' => $summary['metadata'],
    ];
});

//////////////////////////////////////////////////////////////

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::middleware('auth')->get('/ManualOperations', 'ManualOperationsController@index');
