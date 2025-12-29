<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ExpenseController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('admin/expenses/create');
    }

    public function store(Request $request)
    {
        return redirect()->route('admin.expenses.report');
    }

    public function report(): Response
    {
        return Inertia::render('admin/expenses/report');
    }

    public function categories(): Response
    {
        return Inertia::render('admin/expenses/categories');
    }

    public function storeCategory(Request $request)
    {
        return redirect()->route('admin.expenses.categories');
    }
}
