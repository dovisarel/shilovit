<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 560px">
      <h1 class="text-h4 text-center q-ma-none q-pb-lg">רשימת דיווחים</h1>

      <q-table
        __title="Treats"
        :data="activities"
        :columns="columns"
        row-key="name"
        @row-click="editRow"
        :grid="$q.screen.xs"
      />
    </div>
  </q-page>
</template>

<script>
import { date } from 'quasar'
// import { mapState } from 'vuex'

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
      columns: [
        // {
        //   name: 'name',
        //   required: true,
        //   label: 'Dessert (100g serving)',
        //   align: 'left',
        //   field: row => row.name,
        //   format: val => `${val}`,
        //   sortable: true
        // },
        { name: 'type_name', align: 'right', label: 'סוג', field: 'type_name', sortable: true },
        { name: 'date', align: 'right', label: 'תאריך', field: row => date.formatDate(row.time_start, 'YYYY-MM-DD'), sortable: true },
        { name: 'timeStart', align: 'right', label: 'התחלה', field: row => date.formatDate(row.time_start, 'HH:mm') },
        { name: 'timeEnd', align: 'right', label: 'סיום', field: row => date.formatDate(row.time_end, 'HH:mm') || '-' },
        { name: 'totalTime', align: 'right', label: 'זמן', field: row => diffInMinute(row.time_end, row.time_start) }
        // { name: 'protein', label: 'Protein (g)', field: 'protein' },
        // { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        // { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        // { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ]
    }
  },
  computed: {
    activities () {
      return Object.values(this.$store.state.activities.activities)
    }
    // ...mapState('activities', [
    //   'activities'
    // ])
  },
  methods: {
    editRow (e, row) {
      window.console.log(row)
    }
  },
  async mounted () {
    this.$store.dispatch('activities/load', {})
  }
}
</script>
