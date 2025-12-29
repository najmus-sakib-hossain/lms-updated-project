<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SMSController extends Controller
{
    public function bulk(): Response
    {
        return Inertia::render('admin/sms/bulk');
    }

    public function sendBulk(Request $request)
    {
        return redirect()->route('admin.sms.history');
    }

    public function dueList(): Response
    {
        return Inertia::render('admin/sms/due-list');
    }

    public function sendDueList(Request $request)
    {
        return redirect()->route('admin.sms.history');
    }

    public function history(): Response
    {
        return Inertia::render('admin/sms/history');
    }

    public function purchase(): Response
    {
        return Inertia::render('admin/sms/purchase');
    }

    public function processPurchase(Request $request)
    {
        return redirect()->route('admin.sms.purchase');
    }

    public function settings(): Response
    {
        return Inertia::render('admin/sms/settings');
    }

    public function updateSettings(Request $request)
    {
        return redirect()->route('admin.sms.settings');
    }
}
