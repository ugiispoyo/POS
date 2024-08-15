<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Report Penjualan</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            color: #333;
            font-size: 10px;
            /* Mengatur ukuran font keseluruhan */
        }

        h1 {
            color: #608B55;
            text-align: center;
            margin-bottom: 20px;
            font-size: 16px;
            /* Ukuran font untuk judul */
        }

        p {
            text-align: center;
            font-size: 10px;
            margin-bottom: 20px;
        }

        .report-period {
            font-size: 13px;
            color: #333;
            text-align: center;
            margin-bottom: 30px;
        }

        .summary {
            margin-bottom: 20px;
        }

        .summary p {
            font-size: 13px;
            margin: 5px 0;
        }

        .summary p span {
            font-weight: bold;
        }

        .discounted {
            text-decoration: line-through;
            color: #d9534f;
        }

        .transaction-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
            page-break-inside: avoid;
        }

        .transaction-table th,
        .transaction-table td {
            padding: 5px;
            /* Mengurangi padding untuk membuat tabel lebih ringkas */
            text-align: left;
            border: 1px solid #ddd;
            word-wrap: break-word;
            font-size: 10px;
            /* Ukuran font dalam tabel */
        }

        .transaction-table th {
            background-color: #608B55;
            color: white;
            font-size: 10px;
            /* Ukuran font untuk header tabel */
        }

        .item-container {
            border: 1px solid #ddd;
            padding: 5px;
            /* Mengurangi padding untuk membuat kontainer lebih ringkas */
            margin-bottom: 10px;
            border-radius: 8px;
            font-size: 10px;
            /* Ukuran font dalam item container */
        }

        .item-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 10px;
            /* Ukuran font untuk header item */
            margin-bottom: 10px;
        }

        .item-name {
            font-weight: bold;
            color: #333;
        }

        .item-price {
            font-weight: bold;
            color: #333;
            font-size: 10px;
            /* Ukuran font untuk harga item */
        }

        .item-details {
            font-size: 10px;
            color: #555;
            margin-bottom: 5px;
        }

        .item-total {
            font-size: 10px;
            color: #333;
            font-weight: bold;
        }

        .item-total span {
            font-weight: bold;
            font-size: 10px;
        }

        .item-divider {
            border-bottom: 1px dashed #ddd;
            margin: 10px 0;
        }
    </style>
</head>

<body>
    <h1>Report Penjualan</h1>
    {{-- <p>Report Periode: {{ \Carbon\Carbon::parse($startDate)->format('d-m-Y') }} to
        {{ \Carbon\Carbon::parse($endDate)->format('d-m-Y') }}</p> --}}
    <p>Report Periode: {{ \Carbon\Carbon::parse($startDate)->format('d-m-Y') }}</p>

    @php
        $totalItems = $data->sum('totalItems');
        $totalOriginalAmount = $data->sum('totalOriginalAmount');
        $totalFixAmount = $data->sum('totalFixAmount');
    @endphp

    <div class="summary">
        <p>Total Items: <span>{{ $totalItems }}</span></p>
        <p>Total Amount:
            <span>
                @if ($totalOriginalAmount != $totalFixAmount)
                    <span class="discounted">Rp{{ number_format($totalOriginalAmount, 0, ',', '.') }}</span>
                    Rp{{ number_format($totalFixAmount, 0, ',', '.') }}
                @else
                    Rp{{ number_format($totalOriginalAmount, 0, ',', '.') }}
                @endif
            </span>
        </p>
    </div>

    @foreach ($data as $index => $checkout)
        <table class="transaction-table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>ID</th>
                    <th>Total Items</th>
                    <th>Total Original Amount</th>
                    <th>Total Fixed Amount</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ $index + 1 }}</td>
                    <td>{{ $checkout->id }}</td>
                    <td>{{ $checkout->totalItems }}</td>
                    <td>{{ number_format($checkout->totalOriginalAmount, 0, ',', '.') }}</td>
                    <td>{{ number_format($checkout->totalFixAmount, 0, ',', '.') }}</td>
                    <td>{{ \Carbon\Carbon::parse($checkout->created_at)->format('d-m-Y H:i:s') }}</td>
                </tr>
                <tr>
                    <td colspan="6">
                        @foreach (json_decode($checkout->items) as $item)
                            <div class="item-container">
                                <div class="item-header">
                                    <div class="item-name">{{ $item->name }}</div>
                                    <div class="item-price">Rp{{ number_format($item->price, 0, ',', '.') }}</div>
                                </div>
                                <div class="item-details">{{ $item->description }}</div>
                                <div class="item-total">
                                    {{ $item->total }} X Rp{{ number_format($item->price, 0, ',', '.') }}
                                </div>
                                <div class="item-divider"></div>
                                <div class="item-total">
                                    Total: <span>Rp{{ number_format($item->price * $item->total, 0, ',', '.') }}</span>
                                </div>
                            </div>
                        @endforeach
                    </td>
                </tr>
            </tbody>
        </table>
    @endforeach

</body>

</html>
