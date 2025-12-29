<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TeacherController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('admin/teachers/create');
    }

    public function store(Request $request)
    {
        return redirect()->route('admin.teachers.index');
    }

    public function index(): Response
    {
        return Inertia::render('admin/teachers/index');
    }

    public function takeAttendance(): Response
    {
        return Inertia::render('admin/teachers/take-attendance');
    }

    public function storeAttendance(Request $request)
    {
        return redirect()->route('admin.teachers.attendance.index');
    }

    public function attendanceList(): Response
    {
        return Inertia::render('admin/teachers/attendance-list');
    }

    public function monthlyAttendance(): Response
    {
        return Inertia::render('admin/teachers/monthly-attendance');
    }

    public function assignSubjects(): Response
    {
        return Inertia::render('admin/teachers/assign-subjects');
    }

    public function processAssignSubjects(Request $request)
    {
        return redirect()->route('admin.teachers.assigned-list');
    }

    public function assignedList(): Response
    {
        return Inertia::render('admin/teachers/assigned-list');
    }
}
