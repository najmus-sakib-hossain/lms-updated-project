<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ResultController extends Controller
{
    public function createExam(): Response
    {
        return Inertia::render('admin/results/create-exam');
    }

    public function storeExam(Request $request)
    {
        return redirect()->route('admin.results.exams.index');
    }

    public function examList(): Response
    {
        return Inertia::render('admin/results/exam-list');
    }

    public function createCombineResult(): Response
    {
        return Inertia::render('admin/results/create-combine');
    }

    public function storeCombineResult(Request $request)
    {
        return redirect()->route('admin.results.combine.index');
    }

    public function combineResultList(): Response
    {
        return Inertia::render('admin/results/combine-list');
    }

    public function categories(): Response
    {
        return Inertia::render('admin/results/categories');
    }

    public function storeCategory(Request $request)
    {
        return redirect()->route('admin.results.categories');
    }
}
