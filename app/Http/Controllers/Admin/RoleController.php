<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RoleController extends Controller
{
    public function permissions(): Response
    {
        return Inertia::render('admin/roles/permissions');
    }

    public function updatePermissions(Request $request)
    {
        return redirect()->route('admin.roles.permissions');
    }
}
