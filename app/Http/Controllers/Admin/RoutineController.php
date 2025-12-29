<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RoutineController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('admin/routines/create');
    }

    public function store(Request $request)
    {
        return redirect()->route('admin.routines.index');
    }

    public function index(): Response
    {
        return Inertia::render('admin/routines/index');
    }
}
