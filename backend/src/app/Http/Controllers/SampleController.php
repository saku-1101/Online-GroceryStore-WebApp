<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SampleController extends Controller
{
    //response->jsonメソッドの引数に適当な連想配列を設定すると、その連想配列がjson化されレスポンスとして返されます
    public function getJson(){
        return response()->json(['name' => 'john']);
    }
}
