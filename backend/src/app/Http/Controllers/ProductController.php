<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the products.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // DBよりproductテーブルの値を全て取得
      $products = Product::all();

      // compact('product')は['product' => $product]としているのと同意
      return response()->json(compact('products'));
    }

    /**
     * Display a listing of the top category.
     *
     * @return \Illuminate\Http\Response
     */
    public function getTopCategory()
    {
    // DBよりProductテーブルのtop categoryとurlの値を重複を除いて取得
    $products = Product::select('top_category', 'url')->distinct()->get();

    // compact('products')は['products' => $products]としているのと同意
    return response()->json(compact('products'));
    }
    
    /**
     * Display a listing of the second category.
     *
     * @return \Illuminate\Http\Response
     */
    public function getSecondCategory()
    {
    // DBよりProductテーブルのsecond categoryとurlの値を重複を除いて取得
    $products = Product::select('second_category', 'url')->distinct()->get();

    // compact('products')は['products' => $products]としているのと同意
    return response()->json(compact('products'));
    }
    
    /**
     * Display products of the specific category.
     *
     * @param  int  $second_category
     * @return \Illuminate\Http\Response
     */
    public function getProductsByCategory($second_category)
    {
        $products = Product::where('second_category', $second_category)->get();

        // compact('products')は['products' => $products]としているのと同意
        return response()->json(compact('products'));
    }
    /**
     * Display products that match with the provided keyword.
     *
     * @param  string  $query
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $query = $request->input('query');
        $products = Product::where('product_name', 'LIKE', "%{$query}%")->get();
        return response()->json(compact('products'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
