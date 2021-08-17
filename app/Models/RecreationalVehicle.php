<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecreationalVehicle extends Model
{
    use HasFactory;

    public $fillable = [
        'camper_make',
        'camper_brand',
        'sleep_number',
        'price'
    ];

}
