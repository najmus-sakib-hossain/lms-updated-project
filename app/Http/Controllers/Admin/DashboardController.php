<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        // TODO: Replace with actual database queries when models are ready
        return Inertia::render('admin/dashboard', [
            'stats' => [
                'totalStudents' => 0,
                'totalTeachers' => 0,
                'totalBranches' => 0,
                'monthlyRevenue' => 0,
                'activeAdmissions' => 0,
                'pendingFees' => 0,
                'todayAttendance' => 0,
                'recentActivities' => [
                    [
                        'id' => 1,
                        'type' => 'admission',
                        'message' => 'New student admission completed',
                        'time' => '2 hours ago',
                    ],
                    [
                        'id' => 2,
                        'type' => 'fee',
                        'message' => 'Fee payment received from Class 10',
                        'time' => '4 hours ago',
                    ],
                    [
                        'id' => 3,
                        'type' => 'teacher',
                        'message' => 'New teacher profile created',
                        'time' => '1 day ago',
                    ],
                ],
            ]
        ]);
    }
}
