<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class FeeController extends Controller
{
    public function receive(): Response
    {
        return Inertia::render('admin/fees/receive');
    }

    public function processPayment(Request $request)
    {
        return redirect()->route('admin.fees.history');
    }

    public function history(): Response
    {
        return Inertia::render('admin/fees/history');
    }

    public function dueList(): Response
    {
        return Inertia::render('admin/fees/due-list');
    }

    public function regenerate(): Response
    {
        return Inertia::render('admin/fees/regenerate');
    }

    public function processRegenerate(Request $request)
    {
        return redirect()->route('admin.fees.history');
    }

    public function cancelPayment(): Response
    {
        return Inertia::render('admin/fees/cancel-payment');
    }

    public function processCancel($id)
    {
        return redirect()->route('admin.fees.history');
    }

    public function categories(): Response
    {
        return Inertia::render('admin/fees/categories');
    }

    public function storeCategory(Request $request)
    {
        return redirect()->route('admin.fees.categories');
    }

    public function extraAssignment(): Response
    {
        return Inertia::render('admin/fees/extra-assignment');
    }

    public function processExtraAssignment(Request $request)
    {
        return redirect()->route('admin.fees.extra-assignment');
    }
}
