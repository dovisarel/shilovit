<template>
  <q-page class="flex flex-center">
    <div class="full-width q-pa-md" style="max-width: 560px">
      <!-- <h1 class="text-h4 text-center q-ma-none q-pb-lg">סיכום</h1> -->

      <div class="bg-white shadow-2 rounded-borders row q-mb-md q-pa-md" >
        <div class="text-primary">לשים לב:</div>
        עקב באג אולי התחלפו הדיווחים על השיעורים של הרב מלמד והרב יזהר,
        <br>
        נא לבדוק שהדיווח שלכם תקין.
      </div>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-center" colspan="3">
                <h4 class="q-ma-sm text-secondary" >סיכום שנתי</h4>
                <q-linear-progress color="secondary" size="20px" :value="metadata.yearLeft / 100" >
                    <div class="absolute-full flex flex-center">
                        <q-badge color="white" text-color="accent" :label="`${metadata.yearLeft}% מהשנה עברו`" transparent />
                        <!-- <q-badge color="white" text-color="accent" :label="`${yearLeft} חודשים מהשנה עברו`" transparent /> -->
                    </div>
              </q-linear-progress>
            </th>
          </tr>
          <tr>
            <th class="text-center">סוג</th>
            <th class="text-center">כמות</th>
            <th class="text-center">
                הספק באחוזים
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ getActivityName(1) }}</td>
            <td>{{ secToHhMm(getYearValue(1)) }} שעות</td>
            <td>
              <q-linear-progress color="primary" size="20px" :value="getYearPercent(1) / 100" >
                <div class="absolute-full flex flex-center">
                    <q-badge color="white" text-color="accent" :label="`${getYearPercent(1)}%`" transparent />
                </div>
              </q-linear-progress>
            </td>
          </tr>

          <tr>
            <td>{{ getActivityName(3) }}</td>
            <td>{{ getYearValue(3) }}</td>
            <td>
              <q-linear-progress color="primary" size="20px" :value="getYearPercent(3) / 100" >
                <div class="absolute-full flex flex-center">
                    <q-badge color="white" text-color="accent" :label="`${getYearPercent(3)}%`" transparent />
                </div>
              </q-linear-progress>
            </td>
          </tr>

          <tr>
            <td>{{ getActivityName(2) }}</td>
            <td>{{ getYearValue(2) }}</td>
            <td>
              <q-linear-progress color="primary" size="20px" :value="getYearPercent(2) / 100" >
                <div class="absolute-full flex flex-center">
                    <q-badge color="white" text-color="accent" :label="`${getYearPercent(2)}%`" transparent />
                </div>
              </q-linear-progress>
            </td>
          </tr>

          <tr>
            <td>{{ getActivityName(4) }}</td>
            <td>{{ getYearValue(4) }}</td>
            <td>
              <q-linear-progress color="primary" size="20px" :value="getYearPercent(4) / 100" >
                <div class="absolute-full flex flex-center">
                    <q-badge color="white" text-color="accent" :label="`${getYearPercent(4)}%`" transparent />
                </div>
              </q-linear-progress>
            </td>
          </tr>
          <tr>
            <td>{{ getActivityName(5) }}</td>
            <td colspan="2" class="text-center">{{ secToHhMm(getYearValue(5)) }} שעות</td>
          </tr>
        </tbody>
      </q-markup-table>

      <q-markup-table class="q-mt-lg">
        <thead>
          <tr>
            <th class="text-center" colspan="3">
                <h5 class="q-ma-sm text-accent" >
                    סיכום שבועי - {{ _.get(weeks, `${weekId}.parasha`, weekId) }}
                </h5>
            </th>
          </tr>
          <tr>
            <th class="text-center">סוג</th>
            <th class="text-center">כמות</th>
            <th class="text-center">כמות נדרשת</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ getActivityName(1) }}</td>
            <td>{{ secToHhMm(getWeekValue(weekId, 1)) }} שעות</td>
            <td class="text-accent">{{ secToHhMm(5 * 60 * 60) }} שעות</td>
          </tr>

          <tr>
            <td>{{ getActivityName(3) }}</td>
            <td>{{ getWeekValue(weekId, 3) }}</td>
            <td class="text-accent">{{ 2 }}</td>
          </tr>

          <tr>
            <td>{{ getActivityName(2) }}</td>
            <td>{{ getWeekValue(weekId, 2) }}</td>
            <td class="text-accent">{{ 2 }}</td>
          </tr>

          <tr>
            <td>{{ getActivityName(4) }}</td>
            <td>{{ getWeekValue(weekId, 4) }}</td>
            <td class="text-accent">1 בחודש</td>
          </tr>
          <tr>
            <td>{{ getActivityName(5) }}</td>
            <td>{{ secToHhMm(getWeekValue(weekId, 5)) }} שעות</td>
            <td class="text-accent">רשות - לא נדרש</td>
          </tr>
          <tr>
            <td colspan="3">
                <div class="flex justify-between">
                    <q-btn label="הקודם" color="primary" icon="chevron_right" :disabled="weekId <= _.get(metadata, 'firstWeek', 0)" @click="goToWeek('-1')" />
                    <q-btn label="נוכחי" color="primary" @click="goToWeek(_.get(metadata, 'currWeek', 0))" />
                    <q-btn label="הבא" color="primary" icon-right="chevron_left"  :disabled="weekId >= _.get(metadata, 'lastWeek', 0)" @click="goToWeek('+1')"/>
                </div>
            </td>
          </tr>
        </tbody>
      </q-markup-table>

      <q-page-sticky position="bottom-right" :offset="[20, 20]">
        <q-btn fab icon="add" color="accent" to="/activities/add" />
      </q-page-sticky>

      <!-- <pre dir="ltr">{{ summary }}</pre> -->
    </div>
  </q-page>
</template>

<script>
// import { date } from 'quasar'
import { mapState } from 'vuex'
import _ from 'lodash'

// const diffInMinute = function (end, start) {
//   if (!start || !end) {
//     return '-'
//   }

//   return date.getDateDiff(end, start, 'minutes')
// }

const secToHhMm = function (sec) {
  if (!sec) {
    return 0
  }
  const hours = Math.floor(sec / 60 / 60)
  const minutes = Math.floor(sec / 60) % 60

  return hours + ':' + String(minutes).padStart(2, '0')
}

export default {
  name: 'PageActivitiesList',
  data () {
    return {
      weekId: 0
    }
  },
  computed: {
    _: () => _, // lodash
    secToHhMm: () => secToHhMm,
    activities () {
      return Object.values(this.$store.state.activities.activities)
    },
    ...mapState('activities', [
      'summary',
      'metadata',
      'weeks'
    ])
  },
  methods: {
    getActivityName (id) {
      return this.$store.getters['activities/getName'](id)
    },
    getWeekValue (weekId, type) {
      return _.get(this.summary, `weeks.${weekId}.${type}.sum`)
    },
    getYearValue (type) {
      return _.get(this.summary, `total.${type}.sum`)
    },
    getYearPercent (type) {
      const sum = this.getYearValue(type)
      const desiredSum = _.get(this.summary, `total.${type}.desiredSum`)

      if (!desiredSum) {
        return 0
      } else if (sum >= desiredSum) {
        return 100
      }
      return _.round(100 * sum / desiredSum, 1)
    },
    goToWeek (pos) {
      if (pos === '+1') {
        this.weekId++
      } else if (pos === '-1') {
        this.weekId--
      } else {
        this.weekId = pos
      }
    },
    editRow (e, row) {
      window.console.log(row)
    }
  },
  async mounted () {
    await this.$store.dispatch('activities/load', {})
    if (_.get(this.metadata, 'currWeek')) {
      this.weekId = _.get(this.metadata, 'currWeek')
    }
  }
}
</script>
