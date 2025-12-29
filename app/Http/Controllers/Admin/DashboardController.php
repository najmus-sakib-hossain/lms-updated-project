<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/dashboard', [
            'stats' => [
                'totalStudents' => 0,
                'totalTeachers' => 0,
                'totalBranches' => 0,
                'monthlyRevenue' => 0,
            ]
        ]);
    }
}
