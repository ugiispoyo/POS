<?php

namespace App\Http\Controllers;

use App\Models\Checkout;
use Maatwebsite\Excel\Facades\Excel;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Exports\CheckoutExport;

class ReportController extends Controller
{
    public function downloadReport($startDate, $endDate, $format)
    {
        $updateStartDate = date('Y-m-d 00:00:00', strtotime($startDate));
        $updateEndDate = date('Y-m-d 23:59:59', strtotime($endDate));

        $data = Checkout::whereBetween('created_at', [$updateStartDate, $updateEndDate])->get();

        if ($format == 'pdf') {
            return $this->generatePDF($data, $startDate, $endDate);
        } elseif ($format == 'xlsx') {
            return $this->generateExcel($data, $startDate, $endDate);
        } else {
            abort(404);
        }
    }

    private function generatePDF($data, $startDate, $endDate)
    {
        $pdf = Pdf::loadView('report.pdf', compact('data', 'startDate', 'endDate'));
        return $pdf->download('Report-Penjualan-' . $startDate . '-to-' . $endDate . '.pdf');
    }

    private function generateExcel($data, $startDate, $endDate)
    {
        return Excel::download(new CheckoutExport($data), 'Report-Penjualan-' . $startDate . '-to-' . $endDate . '.xlsx');
    }
}
