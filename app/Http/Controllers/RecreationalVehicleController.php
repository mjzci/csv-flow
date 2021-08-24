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
        $rules = [
            'csv' => 'required|mimes:csv,txt'
        ];
    
        $customMessages = [
            'required' => 'You must select and upload a CSV file.'
        ];
    
        $this->validate($request, $rules, $customMessages);

        //manage file upload
        $csv = new CsvHelper($request);
        return $csv->handle();
    }
}
