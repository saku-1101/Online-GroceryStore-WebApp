<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SampleController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
| APIとしてアクセスする場合のルーティングはroutes/api.phpに記載
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('sample', [SampleController::class, 'getJson']);

// RESTful routing
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