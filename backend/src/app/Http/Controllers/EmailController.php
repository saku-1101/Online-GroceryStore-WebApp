<?php
namespace App\Http\Controllers;

use App\Mail\CheckOut;
use App\Models\Order;
use App\Models\Detail;

use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

class EmailController extends Controller
{
    /**
     * Send an email for the order completion.
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function mail(Request $request)
    {
        $email = $request->input('email');
        $name = $request->input('name');
        $orderId = $request->input('orderId');
        $when = now();

        $order = Order::findOrFail($orderId);
        $order_detail = Detail::where('order_id', $orderId)->get();
        
        Mail::to($email)->send(new CheckOut($name, $order, $order_detail, $when));
        return response()->json(["message" => "Email sent successfully!" ]);
    }
}