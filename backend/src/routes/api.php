<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SampleController;

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

Route::get('/product/category', [ProductController::class, 'getCategory']);
Route::resource('product', 'App\Http\Controllers\ProductController');