<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'nama',
        'deskripsi',
        'photo',
        'harga',
        'harga_diskon',
        'stock',
        'diskon',
        'tipe',
    ];
}
