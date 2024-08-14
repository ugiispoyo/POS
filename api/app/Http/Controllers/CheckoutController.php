<?php

namespace App\Http\Controllers;

use App\Models\Checkout;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CheckoutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = $request->get('limit', 15); // Default 15 items per page
        $sortBy = $request->get('sort_by', 'created_at'); // Default sort by created_at
        $sortOrder = $request->get('sort_order', 'asc'); // Default sort order ascending

        $checkout = Checkout::orderBy($sortBy, $sortOrder)->paginate($perPage);
        return response()->json($checkout);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi input
        $validator = Validator::make($request->all(), [
            'items' => 'required|json',
            'totalItems' => 'required|integer',
            'totalOriginalAmount' => 'required|numeric',
            'totalFixAmount' => 'required|numeric',
        ]);

        // Jika validasi gagal
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Ambil semua data dari request
        $data = $request->all();

        // Membuat data baru di tabel checkouts
        $checkout = Checkout::create($data);

        // Mengembalikan response sukses
        return response()->json(['message' => 'Checkout created successfully', 'checkout' => $checkout], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Checkout $checkout)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Checkout $checkout)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Checkout $checkout)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Checkout $checkout)
    {
        //
    }
}
