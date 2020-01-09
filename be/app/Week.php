<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Week extends Model
{
    // protected $table = 'activities';

    public static function getWeekId(\DateTime $date)
    {
        $unix = $date->format('U');
        $secondsInDay = 60 * 60 * 24;

        $daysCount = floor($unix / $secondsInDay) + 4;

        return floor($daysCount / 7);
    }
}
