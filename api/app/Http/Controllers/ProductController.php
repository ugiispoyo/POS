<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'harga' => 'required|numeric',
            'harga_diskon' => 'nullable|numeric',
            'stock' => 'required|integer',
            'diskon' => 'required|boolean',
            'tipe' => 'required|in:makanan,minuman',
        ]);

        $data = $request->all();

        if ($request->hasFile('photo')) {
            $data['photo'] = $request->file('photo')->store('photos', 'public');
        }

        $product = Product::create($data);
        return response()->json($product, 201);
    }

    public function show($id)
    {
        $product = Product::find($id);

        if (is_null($product)) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nama' => 'sometimes|required|string|max:255',
            'deskripsi' => 'nullable|string',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'harga' => 'sometimes|required|numeric',
            'harga_diskon' => 'nullable|numeric',
            'stock' => 'sometimes|required|integer',
            'diskon' => 'sometimes|required|boolean',
            'tipe' => 'sometimes|required|in:makanan,minuman',
        ]);

        $product = Product::find($id);

        if (is_null($product)) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $data = $request->all();

        if ($request->hasFile('photo')) {
            if ($product->photo) {
                Storage::disk('public')->delete($product->photo);
            }
            $data['photo'] = $request->file('photo')->store('photos', 'public');
        }

        $product->update($data);
        return response()->json($product);
    }

    public function destroy($id)
    {
        $product = Product::find($id);

        if (is_null($product)) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        if ($product->photo) {
            Storage::disk('public')->delete($product->photo);
        }

        $product->delete();
        return response()->json(['message' => 'Product deleted successfully']);
    }
}
