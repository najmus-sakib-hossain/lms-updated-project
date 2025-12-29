<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SupportController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/support/index');
    }

    public function store(Request $request)
    {
        return redirect()->route('admin.support.index');
    }
}
