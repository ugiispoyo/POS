<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    // Menampilkan daftar produk
    public function index(Request $request)
    {
        $perPage = $request->get('limit', 15); // Default 15 items per page
        $sortBy = $request->get('sort_by', 'created_at'); // Default sort by created_at
        $sortOrder = $request->get('sort_order', 'asc'); // Default sort order ascending

        $products = Product::orderBy($sortBy, $sortOrder)->paginate($perPage);
        return response()->json($products);
    }

    // Menyimpan produk baru
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'price' => 'required|numeric',
            'priceAfterDiscount' => 'nullable|numeric',
            'stock' => 'nullable|numeric',
            'isDiscount' => 'nullable|in:1,2',
            'type' => 'required|in:makanan,minuman',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $request->all();

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('photos', 'public');
        }

        $product = Product::create($data);

        return response()->json(['message' => 'Product created successfully', 'product' => $product], 201);
    }

    // Menampilkan produk tertentu
    public function show($id)
    {
        $product = Product::find($id);

        if (is_null($product)) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product);
    }

    // Memperbarui produk tertentu
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'price' => 'required|numeric',
            'priceAfterDiscount' => 'nullable|numeric',
            'stock' => 'nullable|numeric',
            'isDiscount' => 'nullable|in:1,2',
            'type' => 'required|in:makanan,minuman',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $product = Product::find($id);

        if (is_null($product)) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $data = $request->only(['name', 'description', 'price', 'priceAfterDiscount', 'stock', 'isDiscount', 'type', "image"]);

        if ($request->hasFile('image')) {
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
            $data['image'] = $request->file('image')->store('photos', 'public');
        }

        $product->update($data);

        return response()->json(['message' => 'Product updated successfully', 'product' => $product], 200);
    }

    // Menghapus produk tertentu
    public function destroy($id)
    {
        $product = Product::find($id);

        if (is_null($product)) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }

        $product->delete();

        return response()->json(['message' => 'Product deleted successfully'], 200);
    }
}
