<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SalaryController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('admin/salary/create');
    }

    public function store(Request $request)
    {
        return redirect()->route('admin.salary.teachers-report');
    }

    public function advance(): Response
    {
        return Inertia::render('admin/salary/advance');
    }

    public function storeAdvance(Request $request)
    {
        return redirect()->route('admin.salary.advance');
    }

    public function teachersReport(): Response
    {
        return Inertia::render('admin/salary/teachers-report');
    }

    public function staffReport(): Response
    {
        return Inertia::render('admin/salary/staff-report');
    }
}
