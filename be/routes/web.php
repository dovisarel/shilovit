<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

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
    return [
        'success' => true,
        'message' => 'initial data',
        'isAuth' => Auth::check(),
        'user' => Auth::user(),
        'isAdmin' => false,
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

    return [
        'success' => true,
        'message' => 'משתמש התנתק בהצלחה',
    ];
});

Route::middleware('auth')->get('/user/getList', function (Request $request) {
    // TODO: check if it admin

    return [
        'users' => User::all(),
    ];
});

Route::middleware('auth')->get('/activities/list', function (Request $request) {
    $user_id = Auth::id();
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
        'date' => 'bail|required|date',
        'startTime' => 'bail|required',
        'endTime' => 'bail|nullable',
        'score' => 'bail|numeric|integer|min:0|max:100',
    ]);

    $activity = new App\Activity;

    $activity->user_id = Auth::id();
    $activity->type_id = $validatedData['activityType'];
    $activity->time_start = date_create($validatedData['date'] . ' ' . $validatedData['startTime']);
    if ($validatedData['endTime']) {
        $activity->time_end = date_create($validatedData['date'] . ' ' . $validatedData['endTime']);
    }

    // $activity->options = '[]';

    if ($validatedData['activityType'] == App\Activity::TYPE_MONTHLY_TEST) {
        $temp_options = $activity->options;
        $temp_options['score'] = $validatedData['score'];
        $activity->options = $temp_options;
    }

    $activity->save();

    return [
        'activity' => $activity,
    ];
});

Route::middleware('auth')->get('/activities/getSummary', function (Request $request) {
    $user_id = Auth::id();

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
