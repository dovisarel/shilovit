<?php

namespace App;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
// use Illuminate\Support\Arr;

class emulateUser
{
    public static function getId()
    {
        if (Gate::denies('is-admin')) {
            return Auth::id();
        }

        return session('emulate_user_id', Auth::id());
    }

    public static function setId($id)
    {
        Gate::authorize('is-admin');

        session(['emulate_user_id' => $id]);
    }

    public static function forget()
    {
        session()->forget('emulate_user_id');
    }
}
