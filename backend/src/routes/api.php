<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SampleController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
| ブラウザからアクセスして使用する場合のルーティングはroutes/web.phpに記載
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('sample', [SampleController::class, 'getJson']);

Route::get('/api/product/category', [ProductController::class, 'getCategory']);
Route::get('/api/product/category/{category}', [ProductController::class, 'getSubCategoriesByCategory']);
Route::get('/api/product/category/{category}/sub_category/{sub_category}', [ProductController::class, 'getProductsByCategory']);
Route::get('/api/product/search', [ProductController::class, 'search']);
Route::resource('/api/product', 'App\Http\Controllers\ProductController');

Route::post('/api/order/add', [OrderController::class, 'addOrder']);
Route::delete('/api/order/delete/all', [OrderController::class, 'destroy']);
Route::delete('/api/order/delete/{order_id}/{product_id}', [OrderController::class, 'deleteByProductId']);
Route::resource('/api/order', 'App\Http\Controllers\OrderController');

//Email Route
Route::post('/api/checkout', [App\Http\Controllers\EmailController::class, 'mail']);