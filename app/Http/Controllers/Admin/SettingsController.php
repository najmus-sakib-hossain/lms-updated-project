<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SettingsController extends Controller
{
    public function ipListing(): Response
    {
        return Inertia::render('admin/settings/ip-listing');
    }

    public function updateIpListing(Request $request)
    {
        return redirect()->route('admin.settings.ip-listing');
    }

    public function customReportCard(): Response
    {
        return Inertia::render('admin/settings/custom-report-card');
    }

    public function updateCustomReportCard(Request $request)
    {
        return redirect()->route('admin.settings.custom-report-card');
    }
}
