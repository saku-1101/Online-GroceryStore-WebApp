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
    public function addOrder(Request $request)
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
        
        // get the order detail record, or create a new one if it doesn't exist
        $orderDetail = Detail::firstOrNew(['order_id' => $order_id, 'product_id' => $product_id]);

        // update the order record with the new total amount and order date
        $orderDetail->quantity += $quantity;
        $orderDetail->unit_price = $unitPrice;

        // save the order record
        $orderDetail->save();

        // Update the quantity of the product
        $product->in_stock -= $quantity;
        $product->save();
        
        return response()->json([
            'message' => 'Product added to order.',
            'order_id' => $order->order_id,
            'total_amount' => $order->total_amount,
        ]);
    }

     /**
     * Display the specified order.
     *
     * @param  int  $orderId
     * @return \Illuminate\Http\Response
     */
    public function show($order_id)
    {
        try {
            // 注文情報を取得
            $order = Order::findOrFail($order_id);

            // 注文詳細情報を取得
            try {
                $orderDetails = Detail::where('order_id', $order_id)->get();
    
                if ($orderDetails->isEmpty()) {
                    throw new \Exception('No order details found for the given order ID');
                }
    
                return response()->json(['order' => $order, 'order_details' => $orderDetails], 200);
            } catch (\Exception $e) {
                return response()->json(['message' => $e->getMessage()], 400);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }
    /**
     * Remove a product and update its corresponding orders and products in the database.
     *
     * @param  int  $order_id, $product_id
     * @return \Illuminate\Http\Response
     */
    public function deleteByProductId($order_id, $product_id)
    {
        // Order_details テーブルから指定した order_id と product_id に一致するレコードを削除する
        $deletedRows = Detail::where('order_id', $order_id)
                                  ->where('product_id', $product_id)
                                  ->get();
                                  
        foreach($deletedRows as $deletedRow){
            $order = Order::find($deletedRow->order_id);
            $order->total_amount = $order->total_amount - ($deletedRow->unit_price * $deletedRow->quantity);
            $order->save();
            
            $product = Product::find($deletedRow->product_id);
            $product->in_stock = $product->in_stock + $deletedRow->quantity;
            $product->save();
        }

        $deletedRowsCount = Detail::where('product_id', $product_id)->delete();

        return response()->json([
            'message' => 'Deleted ' . $deletedRows . ' rows, and updated the total amount and in_stock fields'
        ]);
    }

    /**
     * Remove an order and its corresponding details from the database.
     *
     * @param  int  $order_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($order_id)
    {
        try {
            $order = Order::findOrFail($order_id);
            Detail::where('order_id', $order_id)->delete(); // deletes corresponding order details
            $order->delete(); // deletes the order

            return response() -> json(['message' => 'Order is successfully deleted!']);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
        
    }
}
