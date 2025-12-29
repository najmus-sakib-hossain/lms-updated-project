<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class TutorialController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/tutorials/index');
    }
}
