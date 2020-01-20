<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Arr;
use UnexpectedValueException;

class Activity extends Model
{
    use SoftDeletes;

    public const TYPE_SELF_LEARNING = 1;
    public const TYPE_EMONA_LESSON = 2;
    public const TYPE_HALACHA_LESSON = 3;
    public const TYPE_MONTHLY_TEST = 4;
    public const TYPE_DILIGENCE_LEARNING = 5;

    protected $table = 'activities';

    protected $appends = ['type_name'];

    /**
     * The model's default values for attributes.
     *
     * @var array
     */
    protected $attributes = [
        'options' => '[]',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'options' => 'array',
    ];

    public function getTypeNameAttribute()
    {
        return self::activityTypeName($this->attributes['type_id']);
    }

    private static function activityTypeName($type_id)
    {
        $names = [
            self::TYPE_SELF_LEARNING => 'לימוד עצמי',
            self::TYPE_HALACHA_LESSON => 'שיעור הרב מלמד',
            self::TYPE_EMONA_LESSON => 'שיעור הרב יזהר',
            self::TYPE_MONTHLY_TEST => 'מבחן חודשי',
            self::TYPE_DILIGENCE_LEARNING => 'יחידות שקידה',
        ];

        return $names[$type_id] ?? '[לא ידוע]';
    }

    // private static function getWeekId(\DateTime $date)
    // {
    //     $unix = $date->format('U');
    //     $secondsInDay = 60 * 60 * 24;

    //     $daysCount = floor($unix / $secondsInDay) + 4;

    //     return floor($daysCount / 7);
    // }

    private static function tempNameConfig()
    {
        return [
            self::TYPE_SELF_LEARNING => [
                'max_per_week' => 10 * 60 * 60,// 10 hours
                'max_per_month' => 9999 * 60 * 60,// 9999 hours
                'max_total' => 2 * 5 * 35 * 60 * 60,// 2 * 135 hours
                'method_calculation' => 'time_diff',
                'year_desired_sum' => 5 * 35 * 60 * 60,// 135 hours
            ],
            self::TYPE_HALACHA_LESSON => [
                'max_per_week' => 4,
                'max_per_month' => 9999,
                'max_total' => 2 * 70,
                'year_desired_sum' => 70,
            ],
            self::TYPE_EMONA_LESSON => [
                'max_per_week' => 4,
                'max_per_month' => 9999,
                'max_total' => 2 * 70,
                'year_desired_sum' => 70,
            ],
            self::TYPE_MONTHLY_TEST => [
                'max_per_week' => 2,
                'max_per_month' => 10,
                'max_total' => 10,
                'year_desired_sum' => 10,
            ],
            self::TYPE_DILIGENCE_LEARNING => [
                'max_per_week' => 4 * 60 * 60,// 4 hour
                'max_per_month' => 8 * 60 * 60,// 8 hour
                'method_calculation' => 'time_diff',
                // 'min_one_item' => 30 * 60,// half hour
                'max_total' => 10 * 8 * 60 * 60,// 8 hour * 10 months
                'year_desired_sum' => 0,
            ],
        ];
    }

    public static function getSummary($userId, $yearId)
    {
        $startYear = date_create(($yearId - 1) . '-11-01');
        $endYear = date_create($yearId . '-09-01');
        
        $items = self::where('user_id', $userId)
            ->where('time_start', '>', $startYear)
            ->where('time_start', '<', $endYear)
            ->orderBy('time_start', 'asc')
            ->get()
            ->keyBy('id');

        // dd($items);

        $config = self::tempNameConfig();

        $weeksData = [];
        $monthsData = [];
        $totalData = [];

        foreach ($items as $el) {
            $type = (int) $el->type_id;
            $configPerType = Arr::get($config, $type);

            $weekId = Week::getWeekId(date_create($el->time_start));
            $monthId = date_create($el->time_start)->format('n');

            if (! Arr::has($weeksData, implode('.', [$weekId, $type]))) {
                Arr::set($weeksData, implode('.', [$weekId, $type]), [
                    'sum' => 0,
                    'items' => [],
                ]);
            }

            if (! Arr::has($monthsData, implode('.', [$monthId, $type]))) {
                Arr::set($monthsData, implode('.', [$monthId, $type]), [
                    'sum' => 0,
                    'items' => [],
                ]);
            }

            if (! Arr::has($totalData, implode('.', [$type]))) {
                Arr::set($totalData, implode('.', [$type]), [
                    'sum' => 0,
                    'desiredSum' => Arr::get($configPerType, 'year_desired_sum'),
                    'items' => [],
                ]);
            }
            
            $methodCalculation = Arr::get($configPerType, 'method_calculation', 'simple');
            $minOneItem = Arr::get($configPerType, 'min_one_item', 0);

            $maxPerWeek = Arr::get($configPerType, 'max_per_week', 0);
            $maxPerMonth = Arr::get($configPerType, 'max_per_month', 0);
            $maxTotal = Arr::get($configPerType, 'max_total', 0);

            $currWeekSum = Arr::get($weeksData, implode('.', [$weekId, $type, 'sum']));
            $currMonthSum = Arr::get($monthsData, implode('.', [$monthId, $type, 'sum']));
            $currTotalSum = Arr::get($totalData, implode('.', [$type, 'sum']));

            try {
                if ($methodCalculation === 'time_diff') {
                    $start = date_create($el->time_start);
                    $end = date_create($el->time_end);

                    if (empty($end)) {
                        throw new UnexpectedValueException("לא נספר, כי חסר זמן סיום", 1);
                    }

                    if ($start > $end) {
                        throw new UnexpectedValueException("לא נספר, כי זמן סיום לפני זמן התחלה", 1);
                    }

                    if ($start === $end) {
                        throw new UnexpectedValueException("לא נספר, כי זמן התחלה זהה לזמן סיום.", 1);
                    }

                    $valueToAdd = $end->format('U') - $start->format('U');

                    if ($valueToAdd > 5 * 60 * 60) {// 5 hours
                        throw new UnexpectedValueException("לא נספר, כי אין אפשרות לדווח על זמן כל כך ארוך", 1);
                    }
                } else {
                    $valueToAdd = 1;
                }

                if ($minOneItem > $valueToAdd) {
                    throw new UnexpectedValueException("לא נספר, כי קצר מידי", 1);
                }

                $maxToAdd = min([
                    $maxPerWeek - $currWeekSum,
                    $maxPerMonth - $currMonthSum,
                    $maxTotal - $currTotalSum,
                ]);

                if ($valueToAdd > $maxToAdd) {
                    $boundList = array_filter([
                        ($valueToAdd > $maxPerWeek - $currWeekSum) ? 'שבועי' : '',
                        ($valueToAdd > $maxPerMonth - $currMonthSum) ? 'חודשי' : '',
                        ($valueToAdd > $maxTotal - $currTotalSum) ? 'שנתי' : '',
                    ]);

                    $boundMsgText = sprintf('כי עברת את המקסימום (%s).', implode(' + ', $boundList));
                } else {
                    $boundMsgText = '';
                }

                if ($maxToAdd <= 0) {
                    throw new UnexpectedValueException("לא נספר, " . $boundMsgText, 1);
                } elseif ($valueToAdd > $maxToAdd) {
                    $finalValueToAdd = $maxToAdd;
                    $comment = 'נספר חלקית, ' . $boundMsgText;
                } elseif ($valueToAdd <= $maxToAdd) {
                    $finalValueToAdd = $valueToAdd;
                    $comment = '';
                } else {
                    throw new UnexpectedValueException("תקלה - 2057s-g298-dh85-sh93.", 1);
                }

                Arr::Set($weeksData, implode('.', [$weekId, $type, 'sum']), $currWeekSum + $finalValueToAdd);
                Arr::Set($monthsData, implode('.', [$monthId, $type, 'sum']), $currMonthSum + $finalValueToAdd);
                Arr::Set($totalData, implode('.', [$type, 'sum']), $currTotalSum + $finalValueToAdd);
            } catch (UnexpectedValueException $ex) {
                $comment = $ex->getMessage();
            }

            $weeksData[$weekId][$type]['items'][] = [
                'id' => $el->id,
                'comment' => $comment,
            ];

            $monthsData[$monthId][$type]['items'][] = [
                'id' => $el->id,
                'comment' => $comment,
            ];

            $totalData[$type]['items'][] = [
                'id' => $el->id,
                'comment' => $comment,
            ];
        }

        // dd($weeksData, $monthsData, $totalData, $items);

        $metadata = [
            'firstWeek' => Week::getWeekId($startYear),
            'currWeek' => Week::getWeekId(date_create('now')),
            'lastWeek' => Week::getWeekId($endYear),

            'yearLeft'=> round(100 * (time() - $startYear->format('U')) / ($endYear->format('U') - $startYear->format('U')), 2),
        ];

        $weeks = Week::where('id', '>=', $metadata['firstWeek'])
            ->where('id', '<=', $metadata['lastWeek'])
            ->orderBy('id', 'asc')
            ->get()
            ->keyBy('id');

        return [
            'items' => $items,
            'metadata' => $metadata,
            'weeks' => $weeks,
            'summary' => [
                'weeks' => $weeksData,
                'months' => $monthsData,
                'total' => $totalData,
            ],
        ];
    }
}
