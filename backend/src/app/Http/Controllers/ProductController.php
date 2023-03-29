<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
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
     * Display a listing of the category.
     *
     * @return \Illuminate\Http\Response
     */
    public function getCategory()
    {
    // DBよりProductテーブルのcategoryとurlの値を重複を除いて取得
    $products = Product::select('category', 'url')->distinct()->get();

    // compact('products')は['products' => $products]としているのと同意
    return response()->json(compact('products'));
    }
    
    /**
     * Display products of the specified category.
     *
     * @param  int  $category
     * @return \Illuminate\Http\Response
     */
    public function getProductsByCategory($category)
    {
        // DBより指定されたcategoryのProductテーブルの値を取得
        $products = Product::where('category', $category)->get();

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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit($product_id)
    {
        // DBよりURIパラメータと同じIDを持つproductの情報を取得
      $product = Product::findOrFail($product_id);

      // 取得した値をビュー「product/edit」に渡す
      return response() -> json(compact(product));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
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
