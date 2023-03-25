<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id('product_id');
            $table->string('product_name', 20);
            $table->decimal('unit_price', 8, 2);
            $table->string('unit_quantity', 15);
            $table->unsignedBigInteger('in_stock');
            $table->unsignedBigInteger('category');
            $table->unsignedBigInteger('image');
            $table->string('url', 512);
            $table->timestamps();
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
