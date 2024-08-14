<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('checkouts', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->json('items'); // Menambahkan kolom items dengan tipe JSON
            $table->integer('totalItems'); // Menambahkan kolom totalItems dengan tipe integer
            $table->decimal('totalOriginalAmount', 10, 2); // Menambahkan kolom totalOriginalAmount dengan tipe decimal
            $table->decimal('totalFixAmount', 10, 2); // Menambahkan kolom totalFixAmount dengan tipe decimal
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('checkouts');
    }
};
