<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->text('deskripsi')->nullable();
            $table->string('photo')->nullable();
            $table->decimal('harga', 10, 2);
            $table->integer('stock');
            $table->boolean('diskon')->default(0);  /* (1 diskon 2 tidak) */
            $table->enum('tipe', ['makanan', 'minuman']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
