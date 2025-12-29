<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BranchController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/branches/index');
    }

    public function create(): Response
    {
        return Inertia::render('admin/branches/create');
    }

    public function store(Request $request)
    {
        // Implementation pending
        return redirect()->route('admin.branches.index');
    }

    public function edit($id): Response
    {
        return Inertia::render('admin/branches/edit', ['branchId' => $id]);
    }

    public function update(Request $request, $id)
    {
        // Implementation pending
        return redirect()->route('admin.branches.index');
    }

    public function destroy($id)
    {
        // Implementation pending
        return redirect()->route('admin.branches.index');
    }
}
