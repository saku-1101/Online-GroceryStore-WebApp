<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    use HasFactory;

    protected $table = 'order_details';

    protected $primaryKey = 'detail_id';

    protected $fillable = ['order_id', 'product_id', 'unit_price', 'quantity'];
    
    public function orders()
    {
        return $this->belongsTo(Order::class);
    }

    public function orderDetails()
    {
        return $this->belongsTo(Product::class);
    }
}
