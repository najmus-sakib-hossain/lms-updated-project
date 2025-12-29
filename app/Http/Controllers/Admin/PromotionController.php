<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PromotionController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/promotion/index');
    }

    public function promote(Request $request)
    {
        return redirect()->route('admin.promotion.index');
    }
}
