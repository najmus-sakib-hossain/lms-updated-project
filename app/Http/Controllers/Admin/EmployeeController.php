<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EmployeeController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('admin/employees/create');
    }

    public function store(Request $request)
    {
        return redirect()->route('admin.employees.index');
    }

    public function index(): Response
    {
        return Inertia::render('admin/employees/index');
    }

    public function manualAttendance(): Response
    {
        return Inertia::render('admin/employees/manual-attendance');
    }

    public function storeManualAttendance(Request $request)
    {
        return redirect()->route('admin.employees.attendance.index');
    }

    public function selfAttendance(): Response
    {
        return Inertia::render('admin/employees/self-attendance');
    }

    public function storeSelfAttendance(Request $request)
    {
        return redirect()->route('admin.employees.attendance.index');
    }

    public function breakTime(): Response
    {
        return Inertia::render('admin/employees/break-time');
    }

    public function storeBreakTime(Request $request)
    {
        return redirect()->route('admin.employees.attendance.index');
    }

    public function attendanceList(): Response
    {
        return Inertia::render('admin/employees/attendance-list');
    }

    public function monthlyAttendance(): Response
    {
        return Inertia::render('admin/employees/monthly-attendance');
    }
}
