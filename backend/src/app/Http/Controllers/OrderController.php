<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Detail;
use App\Models\Product;

use Illuminate\Http\Request;


class OrderController extends Controller
{
    /**
     * Insert the added products into the order table.
     * Update the order details.
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function addProduct(Request $request)
    {
        
        // get unique order id, product id and quantity from the request
        $order_id = $request->input('order_id');
        $product_id = $request->input('product_id');
        $quantity = $request->input('quantity');
        
        // get the product price
        $product = Product::findOrFail($product_id);
        $unitPrice = $product->unit_price;
        
        
        // get the order record, or create a new one if it doesn't exist
        $order = Order::firstOrNew(['order_id' => $order_id]);

        // update the order record with the new total amount and order date
        $order->total_amount += $unitPrice * $quantity;
        $order->order_date = now();

        // save the order record
        $order->save();

        // create a new order detail record
        $orderDetail = Detail::create([
            'order_id' => $order->order_id,
            'product_id' => $product_id,
            'unit_price' => $unitPrice,
            'quantity' => $quantity,
        ]);
        
        
        return response()->json([
            'message' => 'Product added to order.',
            'order_id' => $order->order_id,
            'total_amount' => $order->total_amount,
        ]);
    }
    /**
     * Remove the products from the order table.
     * Update the order details.
     * @return \Illuminate\Http\Response
     */
    public function removeProduct()
    {
        
    }
}
