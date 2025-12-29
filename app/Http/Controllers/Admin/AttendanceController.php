<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AttendanceController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('admin/attendance/create');
    }

    public function store(Request $request)
    {
        return redirect()->route('admin.attendance.index');
    }

    public function index(): Response
    {
        return Inertia::render('admin/attendance/index');
    }

    public function monthly(): Response
    {
        return Inertia::render('admin/attendance/monthly');
    }

    public function downloadBlankSheet(): Response
    {
        return Inertia::render('admin/attendance/download-blank-sheet');
    }
}
