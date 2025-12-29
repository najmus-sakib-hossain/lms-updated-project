<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class IncomeController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('admin/income/create');
    }

    public function store(Request $request)
    {
        return redirect()->route('admin.income.report');
    }

    public function report(): Response
    {
        return Inertia::render('admin/income/report');
    }

    public function categories(): Response
    {
        return Inertia::render('admin/income/categories');
    }

    public function storeCategory(Request $request)
    {
        return redirect()->route('admin.income.categories');
    }
}
