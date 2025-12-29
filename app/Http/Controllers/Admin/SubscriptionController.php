<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SubscriptionController extends Controller
{
    public function profile(): Response
    {
        return Inertia::render('admin/subscription/profile');
    }

    public function updateProfile(Request $request)
    {
        return redirect()->route('admin.subscription.profile');
    }

    public function status(): Response
    {
        return Inertia::render('admin/subscription/status');
    }

    public function clearCache(Request $request)
    {
        return redirect()->route('admin.subscription.profile');
    }
}
