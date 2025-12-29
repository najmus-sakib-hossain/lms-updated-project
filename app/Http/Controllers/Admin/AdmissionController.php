<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdmissionController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('admin/admissions/create');
    }

    public function store(Request $request)
    {
        return redirect()->route('admin.students.index');
    }

    public function incomplete(): Response
    {
        return Inertia::render('admin/admissions/incomplete');
    }
}
