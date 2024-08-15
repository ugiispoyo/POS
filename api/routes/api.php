<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ReportController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('products', ProductController::class);
Route::apiResource('checkout', CheckoutController::class);

Route::get(
    'download-report-{startDate}-to-{endDate}.{format}',
    [ReportController::class, 'downloadReport']
)->where([
    'startDate' => '\d{4}-\d{2}-\d{2}',
    'endDate' => '\d{4}-\d{2}-\d{2}',
    'format' => 'pdf|xlsx'
]);;
