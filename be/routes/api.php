<?php

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('guest')->post('/user/register', function (Request $request) {
    $validatedData = $request->validate([
        'id_card' => 'bail|required|min:8|max:9|luhn',
        'name' => 'bail|required|min:5|max:50|unique:users',
        'email' => 'bail|required|min:6|max:50|email:rfc|unique:users',
        'password' => 'bail|required|min:6|max:20',
        // 'body' => 'required',
    ]);

    return [
        'ddd' => 1,
    ];

    // return [
    //     'name' => $request->input('name'),
    //     'email' => $request->input('email'),
    //     'password' => $request->input('password'),
    // ];

    // TODO: add validate input

    $user = User::create([
        'name' => $request->input('name'),
        'email' => $request->input('email'),
        'password' => Hash::make($request->input('password')),
    ]);

    return $user;// TODO: fix return value
});

Route::get('/user_temp', function (Request $request) {
    return response()->json([1,2,3]);
    // return $request->user();
});
