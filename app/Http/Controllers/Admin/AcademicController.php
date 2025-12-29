<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AcademicController extends Controller
{
    public function createClass(): Response
    {
        return Inertia::render('admin/academic/create-class');
    }

    public function storeClass(Request $request)
    {
        return redirect()->route('admin.academic.overview');
    }

    public function createSubject(): Response
    {
        return Inertia::render('admin/academic/create-subject');
    }

    public function storeSubject(Request $request)
    {
        return redirect()->route('admin.academic.overview');
    }

    public function createGroup(): Response
    {
        return Inertia::render('admin/academic/create-group');
    }

    public function storeGroup(Request $request)
    {
        return redirect()->route('admin.academic.overview');
    }

    public function createBatch(): Response
    {
        return Inertia::render('admin/academic/create-batch');
    }

    public function storeBatch(Request $request)
    {
        return redirect()->route('admin.academic.overview');
    }

    public function overview(): Response
    {
        return Inertia::render('admin/academic/overview');
    }
}
