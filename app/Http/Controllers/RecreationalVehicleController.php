<?php

namespace App\Http\Controllers;

use App\Helpers\CsvHelper;
use App\Models\RecreationalVehicle;
use Illuminate\Http\Request;

class RecreationalVehicleController extends Controller
{
    /**
     * Parses uploaded CSV file and inserts CSV cells into DB per each header (e.g. "Camper Brand" = recreational_vehicles.brand)
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function import(Request $request)
    {
        // validate request 
        $request->validate([
            'csv' => 'required|mimes:csv,txt',
        ]);

        //manage file upload
        $csv = new CsvHelper($request);
        return $csv->handle();
    }
}
