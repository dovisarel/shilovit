<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Activity extends Model
{
    use SoftDeletes;

    protected $table = 'activities';

    protected $appends = ['type_name'];

    /**
     * Get the administrator flag for the user.
     *
     * @return bool
     */
    public function getTypeNameAttribute()
    {
        return self::activityTypeName($this->attributes['type_id']);
    }

    private static function activityTypeName($type_id)
    {
        $names = [
            1 => 'לימוד עצמי',
            2 => 'שיעור הלכה',
            3 => 'שיעור אמונה',
            4 => 'מבחן',
            5 => 'לימוד - שקידה',
        ];

        return $names[$type_id] ?? '[לא ידוע]';
    }
}
