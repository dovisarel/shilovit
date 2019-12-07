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

Route::middleware('guest')->get('/register', function (Request $request) {
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
