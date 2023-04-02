<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Detail;

class Order extends Model
{
    use HasFactory;

    protected $table = "orders";
    protected  $primaryKey = "order_id";
    protected $fillable = ['order_id', 'total_amount'];

    public function orderDetails()
    {
        return $this->hasMany(Detail::class);
    }
}
