<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * CAUTION: The table is already made in SQL.
     * CAUTION: This is just an explicit definition.
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id('product_id');
            $table->string('product_name', 20);
            $table->decimal('unit_price', 8, 2); # (M,D) means than values can be stored with up to M digits in total, of which D digits may be after the decimal point. 
            $table->string('unit_quantity', 15);
            $table->unsignedBigInteger('in_stock');
            $table->unsignedBigInteger('category');
            $table->unsignedBigInteger('sub_category');
            $table->string('url', 512);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
