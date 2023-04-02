<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    use HasFactory;

    protected $primaryKey = 'detail_id';
    protected $fillable = ['order_id', 'product_id', 'unit_price', 'quantity'];
    protected $table = 'order_details';

    
    // 外部キーのカラム名を明示的に指定する
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
