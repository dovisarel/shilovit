<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 100%">
      <h1 class="text-h4 text-center q-ma-none q-pb-lg">רשימת דיווחים</h1>

      <q-table
        __title="Treats"
        :data="activities"
        :columns="columns"
        row-key="name"
        @row-click="editRow"
        :__grid="$q.screen.xs"
        :dense="$q.screen.xs"
        :pagination.sync="pagination"
      >
        <template v-slot:header-cell="props">
          <q-th :props="props" style="text-align: center;">
            {{ props.col.label }}
          </q-th>
        </template>

        <template v-slot:body-cell-details="props">
          <q-td :props="props">
            <div v-if="props.row.type_id === 1 || props.row.type_id === 5">
              התחלה: {{ formatHHMM(props.row.time_start) }}
              <br>
              סיום: {{ formatHHMM(props.row.time_end) }}
              <br>
              <span v-if="props.row.time_end && props.row.time_start">
                זמן: {{ diffInMinute(props.row.time_end, props.row.time_start) }} דקות
              </span>
            </div>
            <div v-else-if="props.row.type_id === 4">
              מבחן: {{ getTestName(_.get(props.row, 'options.testId')) }}
              <br>
              ציון: {{ _.get(props.row, 'options.score', 'לא ידוע') }}
            </div>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import _ from 'lodash'
import { date } from 'quasar'

const diffInMinute = function (end, start) {
  if (!start || !end) {
    return '-'
  }

  return date.getDateDiff(end, start, 'minutes')
}

export default {
  name: 'PageActivitiesList',
  data () {
    return {
      pagination: { rowsPerPage: 10 },
      columns: [
        { name: 'type_name', align: 'right', label: 'סוג', field: 'type_name', sortable: true },
        { name: 'date', align: 'right', label: 'תאריך', field: row => date.formatDate(row.time_start, 'YYYY-MM-DD'), sortable: true },
        // { name: 'timeStart', align: 'right', label: 'התחלה', field: row => date.formatDate(row.time_start, 'HH:mm') },
        // { name: 'timeEnd', align: 'right', label: 'סיום', field: row => date.formatDate(row.time_end, 'HH:mm') || '-' },
        // { name: 'totalTime', align: 'right', label: 'זמן', field: row => diffInMinute(row.time_end, row.time_start) },
        { name: 'details', align: 'left', label: 'פרטים' }
      ]
    }
  },
  computed: {
    _: () => _,
    diffInMinute: () => diffInMinute,
    activities () {
      return Object.values(this.$store.state.activities.activities)
    }
  },
  methods: {
    formatHHMM (time) {
      return time ? date.formatDate(time, 'HH:mm') : 'חסר'
    },
    getTestName (id) {
      const conf = this.$store.getters['activities/getTestConfig'](id)

      return _.get(conf, 'label', '????')
    },
    editRow (e, row) {
      window.console.log(row)
    }
  },
  async mounted () {
    this.$store.dispatch('activities/load', {})
  }
}
</script>
