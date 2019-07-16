<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

/*
 * Redirection function on login
 * 
*/
    protected function redirectTo( )
    {
        if (Auth::check() && Auth::user()->role == 'admin')
        {
            return('/dashboard');
        }
        else
        {
            return('/home');
        }

    }

/*
 * custom login controller
 * 
*/
    public function logout(Request $request)
    {
        if (Auth::check() && Auth::user()->role == 'admin') {
            Auth::logout();
            $request->session()->invalidate();
            return redirect('/admin');
        }
        else 
        {
            Auth::logout();
            $request->session()->invalidate();
            return redirect('/login');
        }
    }
}
