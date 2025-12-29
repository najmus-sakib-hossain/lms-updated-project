<?php

use App\Http\Controllers\Admin\AcademicController;
use App\Http\Controllers\Admin\AdmissionController;
use App\Http\Controllers\Admin\AttendanceController;
use App\Http\Controllers\Admin\BranchController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\EmployeeController;
use App\Http\Controllers\Admin\ExpenseController;
use App\Http\Controllers\Admin\FeeController;
use App\Http\Controllers\Admin\HomeworkController;
use App\Http\Controllers\Admin\IncomeController;
use App\Http\Controllers\Admin\LeadsController;
use App\Http\Controllers\Admin\PromotionController;
use App\Http\Controllers\Admin\ResultController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\RoutineController;
use App\Http\Controllers\Admin\SalaryController;
use App\Http\Controllers\Admin\SettingsController as AdminSettingsController;
use App\Http\Controllers\Admin\SMSController;
use App\Http\Controllers\Admin\StudentController;
use App\Http\Controllers\Admin\SubscriptionController;
use App\Http\Controllers\Admin\SupportController;
use App\Http\Controllers\Admin\TeacherController;
use App\Http\Controllers\Admin\TutorialController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    
    // Dashboard
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    
    // Branch Management
    Route::prefix('branches')->name('branches.')->group(function () {
        Route::get('create', [BranchController::class, 'create'])->name('create');
        Route::post('', [BranchController::class, 'store'])->name('store');
        Route::get('', [BranchController::class, 'index'])->name('index');
        Route::get('{branch}/edit', [BranchController::class, 'edit'])->name('edit');
        Route::put('{branch}', [BranchController::class, 'update'])->name('update');
        Route::delete('{branch}', [BranchController::class, 'destroy'])->name('destroy');
    });
    
    // Academic Function
    Route::prefix('academic')->name('academic.')->group(function () {
        Route::get('classes/create', [AcademicController::class, 'createClass'])->name('classes.create');
        Route::post('classes', [AcademicController::class, 'storeClass'])->name('classes.store');
        Route::get('subjects/create', [AcademicController::class, 'createSubject'])->name('subjects.create');
        Route::post('subjects', [AcademicController::class, 'storeSubject'])->name('subjects.store');
        Route::get('groups/create', [AcademicController::class, 'createGroup'])->name('groups.create');
        Route::post('groups', [AcademicController::class, 'storeGroup'])->name('groups.store');
        Route::get('batches/create', [AcademicController::class, 'createBatch'])->name('batches.create');
        Route::post('batches', [AcademicController::class, 'storeBatch'])->name('batches.store');
        Route::get('overview', [AcademicController::class, 'overview'])->name('overview');
    });
    
    // Admission
    Route::prefix('admissions')->name('admissions.')->group(function () {
        Route::get('create', [AdmissionController::class, 'create'])->name('create');
        Route::post('', [AdmissionController::class, 'store'])->name('store');
        Route::get('incomplete', [AdmissionController::class, 'incomplete'])->name('incomplete');
    });
    
    // Student Details
    Route::prefix('students')->name('students.')->group(function () {
        Route::get('', [StudentController::class, 'index'])->name('index');
        Route::get('deactivation', [StudentController::class, 'deactivation'])->name('deactivation');
        Route::post('deactivate/{student}', [StudentController::class, 'deactivate'])->name('deactivate');
        Route::get('batch-transfer', [StudentController::class, 'batchTransfer'])->name('batch-transfer');
        Route::post('batch-transfer', [StudentController::class, 'processBatchTransfer'])->name('batch-transfer.process');
    });
    
    // Class Promotion
    Route::prefix('promotion')->name('promotion.')->group(function () {
        Route::get('', [PromotionController::class, 'index'])->name('index');
        Route::post('', [PromotionController::class, 'promote'])->name('promote');
    });
    
    // Student Reports
    Route::prefix('reports')->name('reports.')->group(function () {
        Route::get('payment', [StudentController::class, 'paymentReports'])->name('payment');
        Route::get('attendance', [StudentController::class, 'attendanceReports'])->name('attendance');
        Route::get('result', [StudentController::class, 'resultReports'])->name('result');
        Route::get('monthly-report-card', [StudentController::class, 'monthlyReportCard'])->name('monthly-report-card');
        Route::get('monthly-homework', [StudentController::class, 'monthlyHomeworkReport'])->name('monthly-homework');
    });
    
    // Fee Collection
    Route::prefix('fees')->name('fees.')->group(function () {
        Route::get('receive', [FeeController::class, 'receive'])->name('receive');
        Route::post('receive', [FeeController::class, 'processPayment'])->name('receive.process');
        Route::get('history', [FeeController::class, 'history'])->name('history');
        Route::get('due-list', [FeeController::class, 'dueList'])->name('due-list');
        Route::get('regenerate', [FeeController::class, 'regenerate'])->name('regenerate');
        Route::post('regenerate', [FeeController::class, 'processRegenerate'])->name('regenerate.process');
        Route::get('cancel-payment', [FeeController::class, 'cancelPayment'])->name('cancel-payment');
        Route::delete('cancel/{payment}', [FeeController::class, 'processCancel'])->name('cancel.process');
        Route::get('categories', [FeeController::class, 'categories'])->name('categories');
        Route::post('categories', [FeeController::class, 'storeCategory'])->name('categories.store');
        Route::get('extra-assignment', [FeeController::class, 'extraAssignment'])->name('extra-assignment');
        Route::post('extra-assignment', [FeeController::class, 'processExtraAssignment'])->name('extra-assignment.process');
    });
    
    // Student Attendance
    Route::prefix('attendance')->name('attendance.')->group(function () {
        Route::get('create', [AttendanceController::class, 'create'])->name('create');
        Route::post('', [AttendanceController::class, 'store'])->name('store');
        Route::get('', [AttendanceController::class, 'index'])->name('index');
        Route::get('monthly', [AttendanceController::class, 'monthly'])->name('monthly');
        Route::get('download-blank-sheet', [AttendanceController::class, 'downloadBlankSheet'])->name('download-blank-sheet');
    });
    
    // Homework Management
    Route::prefix('homework')->name('homework.')->group(function () {
        Route::get('create', [HomeworkController::class, 'create'])->name('create');
        Route::post('', [HomeworkController::class, 'store'])->name('store');
        Route::get('', [HomeworkController::class, 'index'])->name('index');
        Route::get('class-tasks', [HomeworkController::class, 'classTasks'])->name('class-tasks');
    });
    
    // Result Management
    Route::prefix('results')->name('results.')->group(function () {
        Route::get('exams/create', [ResultController::class, 'createExam'])->name('exams.create');
        Route::post('exams', [ResultController::class, 'storeExam'])->name('exams.store');
        Route::get('exams', [ResultController::class, 'examList'])->name('exams.index');
        Route::get('combine/create', [ResultController::class, 'createCombineResult'])->name('combine.create');
        Route::post('combine', [ResultController::class, 'storeCombineResult'])->name('combine.store');
        Route::get('combine', [ResultController::class, 'combineResultList'])->name('combine.index');
        Route::get('categories', [ResultController::class, 'categories'])->name('categories');
        Route::post('categories', [ResultController::class, 'storeCategory'])->name('categories.store');
    });
    
    // Routine Management
    Route::prefix('routines')->name('routines.')->group(function () {
        Route::get('create', [RoutineController::class, 'create'])->name('create');
        Route::post('', [RoutineController::class, 'store'])->name('store');
        Route::get('', [RoutineController::class, 'index'])->name('index');
    });
    
    // Teachers Management
    Route::prefix('teachers')->name('teachers.')->group(function () {
        Route::get('create', [TeacherController::class, 'create'])->name('create');
        Route::post('', [TeacherController::class, 'store'])->name('store');
        Route::get('', [TeacherController::class, 'index'])->name('index');
        Route::get('attendance/take', [TeacherController::class, 'takeAttendance'])->name('attendance.take');
        Route::post('attendance', [TeacherController::class, 'storeAttendance'])->name('attendance.store');
        Route::get('attendance', [TeacherController::class, 'attendanceList'])->name('attendance.index');
        Route::get('attendance/monthly', [TeacherController::class, 'monthlyAttendance'])->name('attendance.monthly');
        Route::get('assign-subjects', [TeacherController::class, 'assignSubjects'])->name('assign-subjects');
        Route::post('assign-subjects', [TeacherController::class, 'processAssignSubjects'])->name('assign-subjects.process');
        Route::get('assigned-list', [TeacherController::class, 'assignedList'])->name('assigned-list');
    });
    
    // Employee Management
    Route::prefix('employees')->name('employees.')->group(function () {
        Route::get('create', [EmployeeController::class, 'create'])->name('create');
        Route::post('', [EmployeeController::class, 'store'])->name('store');
        Route::get('', [EmployeeController::class, 'index'])->name('index');
        Route::get('attendance/manual', [EmployeeController::class, 'manualAttendance'])->name('attendance.manual');
        Route::post('attendance/manual', [EmployeeController::class, 'storeManualAttendance'])->name('attendance.manual.store');
        Route::get('attendance/self', [EmployeeController::class, 'selfAttendance'])->name('attendance.self');
        Route::post('attendance/self', [EmployeeController::class, 'storeSelfAttendance'])->name('attendance.self.store');
        Route::get('attendance/break', [EmployeeController::class, 'breakTime'])->name('attendance.break');
        Route::post('attendance/break', [EmployeeController::class, 'storeBreakTime'])->name('attendance.break.store');
        Route::get('attendance', [EmployeeController::class, 'attendanceList'])->name('attendance.index');
        Route::get('attendance/monthly', [EmployeeController::class, 'monthlyAttendance'])->name('attendance.monthly');
    });
    
    // Income Management
    Route::prefix('income')->name('income.')->group(function () {
        Route::get('create', [IncomeController::class, 'create'])->name('create');
        Route::post('', [IncomeController::class, 'store'])->name('store');
        Route::get('report', [IncomeController::class, 'report'])->name('report');
        Route::get('categories', [IncomeController::class, 'categories'])->name('categories');
        Route::post('categories', [IncomeController::class, 'storeCategory'])->name('categories.store');
    });
    
    // Expense Management
    Route::prefix('expenses')->name('expenses.')->group(function () {
        Route::get('create', [ExpenseController::class, 'create'])->name('create');
        Route::post('', [ExpenseController::class, 'store'])->name('store');
        Route::get('report', [ExpenseController::class, 'report'])->name('report');
        Route::get('categories', [ExpenseController::class, 'categories'])->name('categories');
        Route::post('categories', [ExpenseController::class, 'storeCategory'])->name('categories.store');
    });
    
    // Salary Management
    Route::prefix('salary')->name('salary.')->group(function () {
        Route::get('create', [SalaryController::class, 'create'])->name('create');
        Route::post('', [SalaryController::class, 'store'])->name('store');
        Route::get('advance', [SalaryController::class, 'advance'])->name('advance');
        Route::post('advance', [SalaryController::class, 'storeAdvance'])->name('advance.store');
        Route::get('teachers-report', [SalaryController::class, 'teachersReport'])->name('teachers-report');
        Route::get('staff-report', [SalaryController::class, 'staffReport'])->name('staff-report');
    });
    
    // Leads Generation
    Route::prefix('leads')->name('leads.')->group(function () {
        Route::get('create', [LeadsController::class, 'create'])->name('create');
        Route::post('', [LeadsController::class, 'store'])->name('store');
        Route::get('frontdesk', [LeadsController::class, 'frontdesk'])->name('frontdesk');
        Route::get('marketing', [LeadsController::class, 'marketing'])->name('marketing');
    });
    
    // SMS Management
    Route::prefix('sms')->name('sms.')->group(function () {
        Route::get('bulk', [SMSController::class, 'bulk'])->name('bulk');
        Route::post('bulk', [SMSController::class, 'sendBulk'])->name('bulk.send');
        Route::get('due-list', [SMSController::class, 'dueList'])->name('due-list');
        Route::post('due-list', [SMSController::class, 'sendDueList'])->name('due-list.send');
        Route::get('history', [SMSController::class, 'history'])->name('history');
        Route::get('purchase', [SMSController::class, 'purchase'])->name('purchase');
        Route::post('purchase', [SMSController::class, 'processPurchase'])->name('purchase.process');
        Route::get('settings', [SMSController::class, 'settings'])->name('settings');
        Route::post('settings', [SMSController::class, 'updateSettings'])->name('settings.update');
    });
    
    // Manage Subscription
    Route::prefix('subscription')->name('subscription.')->group(function () {
        Route::get('profile', [SubscriptionController::class, 'profile'])->name('profile');
        Route::put('profile', [SubscriptionController::class, 'updateProfile'])->name('profile.update');
        Route::get('status', [SubscriptionController::class, 'status'])->name('status');
        Route::post('clear-cache', [SubscriptionController::class, 'clearCache'])->name('clear-cache');
    });
    
    // Roles & Permissions
    Route::prefix('roles')->name('roles.')->group(function () {
        Route::get('permissions', [RoleController::class, 'permissions'])->name('permissions');
        Route::post('permissions', [RoleController::class, 'updatePermissions'])->name('permissions.update');
    });
    
    // Settings
    Route::prefix('settings')->name('settings.')->group(function () {
        Route::get('ip-listing', [AdminSettingsController::class, 'ipListing'])->name('ip-listing');
        Route::post('ip-listing', [AdminSettingsController::class, 'updateIpListing'])->name('ip-listing.update');
        Route::get('custom-report-card', [AdminSettingsController::class, 'customReportCard'])->name('custom-report-card');
        Route::post('custom-report-card', [AdminSettingsController::class, 'updateCustomReportCard'])->name('custom-report-card.update');
    });
    
    // Tutorials
    Route::get('tutorials', [TutorialController::class, 'index'])->name('tutorials');
    
    // Complaints & Suggestions (কমপ্লেইন ও পরামর্শ)
    Route::prefix('support')->name('support.')->group(function () {
        Route::get('', [SupportController::class, 'index'])->name('index');
        Route::post('', [SupportController::class, 'store'])->name('store');
    });
});
