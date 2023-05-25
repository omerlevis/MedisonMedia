<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //test git
    public function index()
    {
        $countries = Country::all();

        return view('dashboard', compact('countries'));
    }


}
