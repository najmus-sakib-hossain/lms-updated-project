<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StudentController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/students/index');
    }

    public function deactivation(): Response
    {
        return Inertia::render('admin/students/deactivation');
    }

    public function deactivate(Request $request, $id)
    {
        return redirect()->route('admin.students.deactivation');
    }

    public function batchTransfer(): Response
    {
        return Inertia::render('admin/students/batch-transfer');
    }

    public function processBatchTransfer(Request $request)
    {
        return redirect()->route('admin.students.index');
    }

    public function paymentReports(): Response
    {
        return Inertia::render('admin/reports/payment');
    }

    public function attendanceReports(): Response
    {
        return Inertia::render('admin/reports/attendance');
    }

    public function resultReports(): Response
    {
        return Inertia::render('admin/reports/result');
    }

    public function monthlyReportCard(): Response
    {
        return Inertia::render('admin/reports/monthly-report-card');
    }

    public function monthlyHomeworkReport(): Response
    {
        return Inertia::render('admin/reports/monthly-homework');
    }
}
