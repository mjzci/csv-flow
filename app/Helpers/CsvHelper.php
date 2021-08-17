<?php

namespace App\Helpers;
// Helper for handling and parsing CSV files and contains business logic

use App\Models\RecreationalVehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CsvHelper
{
    /** @var \Illuminate\Http\Request */
    private $request;

    /**
     * Report constructor.
     *
     * @param array|string $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Handle file upload.
     *
     * @return array
     */
    public function handle()
    {
        //grab csv file uploaded in request
        $file = $this->request->file('csv');

        return $this->parse($file);
    }


    /**
     * Generate array from CSV file records
     *
     * @param $file
     * @return array
     */
    public function parse($file)
    {
        $getOriginalName = $file->getClientOriginalName();
        $filePath = $file->storeAs('csv_rv', $getOriginalName);
        $extension = $file->extension();
        $fields = []; //init empty array for record data mapping

        if (($fileStream = fopen($file->getPathname(), 'r')) !== FALSE) {
            $headers[] = fgetcsv($fileStream);
            while (!feof($fileStream) && $parsed = fgetcsv($fileStream)) {
                if ($parsed[0] == NULL)
                    continue;
                $fields[] = $parsed;
            }
        }
        fclose($fileStream);

        return $this->mapFields($headers, $fields, true);
    }

    public function mapFields($headers, $fields, $save = false)
    {

        $headersFields = [];  //instantiate empty array prep for DB insert of CSV headers and fields
        
        if (count($fields) > 0) {

            foreach ($fields as $key => $line) {

                foreach ($line as $lineKey => $lineValue) {

                    $headerName = trim($headers[0][$lineKey]);
                    $headerNameFormat = strtolower(str_replace(" ", "_", $headerName)); //format to db field name
                    $headerIndices = array_keys($headers[0]);
                    $fieldLineValue = trim($lineValue);

                    //check for non-numerical values for sleep_number and price field names, set to null if detected
                    //and proceed to populate $attributes array 
                    if (
                        $headerName == 'Sleep Number' && $headerIndices[$lineKey] == 2
                        && !is_numeric($fieldLineValue)
                    ) {

                        $headersFields[$key][$headerNameFormat] =  $fieldLineValue = null;
                    } elseif (
                        $headerName == 'Price' && $headerIndices[$lineKey] == 3
                        && !is_numeric($fieldLineValue)
                    ) {

                        $headersFields[$key][$headerNameFormat] =  $fieldLineValue = null;
                    } else {

                        $headersFields[$key][$headerNameFormat] =  $fieldLineValue;
                    }
                }

                $dbLine = $headersFields[$key];

                //save $attributes array to DB
                if ($save == true)
                    $this->record($dbLine);
            }

            return $headersFields;
        }
    }

    public function record($dbLine)
    {
        //insert array $attributes and return instance
        return RecreationalVehicle::create($dbLine);
    }
}
