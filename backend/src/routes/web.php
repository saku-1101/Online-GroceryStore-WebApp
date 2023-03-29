<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SampleController;
use App\Http\Controllers\ProductController;

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
Route::get('/product/category/{category}', [ProductController::class, 'getProductsByCategory']);
Route::resource('product', 'App\Http\Controllers\ProductController');