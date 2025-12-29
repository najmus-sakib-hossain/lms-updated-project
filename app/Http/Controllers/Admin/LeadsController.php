<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LeadsController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('admin/leads/create');
    }

    public function store(Request $request)
    {
        return redirect()->route('admin.leads.frontdesk');
    }

    public function frontdesk(): Response
    {
        return Inertia::render('admin/leads/frontdesk');
    }

    public function marketing(): Response
    {
        return Inertia::render('admin/leads/marketing');
    }
}
