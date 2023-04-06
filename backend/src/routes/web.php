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
Route::get('/product/category', [ProductController::class, 'getCategory']);
Route::get('/product/category/{category}', [ProductController::class, 'getSubCategoriesByCategory']);
Route::get('/product/category/{category}/sub_category/{sub_category}', [ProductController::class, 'getProductsByCategory']);
Route::get('/product/search', [ProductController::class, 'search']);
Route::resource('product', 'App\Http\Controllers\ProductController');

Route::post('/order/add', [OrderController::class, 'addOrder']);
Route::delete('/order/delete/all', [OrderController::class, 'destroy']);
Route::delete('/order/delete/{order_id}/{product_id}', [OrderController::class, 'deleteByProductId']);
Route::resource('order', 'App\Http\Controllers\OrderController');

//Email Route
Route::post('/checkout', [App\Http\Controllers\EmailController::class, 'mail']);