<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeworkController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('admin/homework/create');
    }

    public function store(Request $request)
    {
        return redirect()->route('admin.homework.index');
    }

    public function index(): Response
    {
        return Inertia::render('admin/homework/index');
    }

    public function classTasks(): Response
    {
        return Inertia::render('admin/homework/class-tasks');
    }
}
