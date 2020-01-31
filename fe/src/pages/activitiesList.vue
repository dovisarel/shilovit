<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 100%">
      <h1 class="text-h4 text-center q-ma-none q-pb-lg">רשימת דיווחים לפי סינון</h1>

      <h2 class="text-h6 q-ma-none q-pb-lg">סינון לפי: {{ filterExplain }}</h2>

      <q-table
        v-if="Object.values(allActivities).length"
        __title="Treats"
        :data="activities"
        :columns="columns"
        row-key="id"
        @row-click="editRow"
        :__grid="$q.screen.xs"
        :dense="$q.screen.xs"
        :pagination.sync="pagination"
        :hide-bottom="activities.length === 1"
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

      <div v-if="query.id && activities.length === 1" class="flex justify-center q-ma-lg">
          <q-btn label="מחיקה" color="red" icon="delete" @click="deleteCurrActivity"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import _ from 'lodash'
import { date } from 'quasar'
import { mapState } from 'vuex'

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
      loading: false,
      pagination: { rowsPerPage: 25 },
      columns: [
        { name: 'type_name', align: 'right', label: 'סוג', field: 'type_name', sortable: true },
        { name: 'date', align: 'right', label: 'תאריך', field: row => date.formatDate(row.time_start, 'YYYY-MM-DD'), sortable: true },
        // { name: 'timeStart', align: 'right', label: 'התחלה', field: row => date.formatDate(row.time_start, 'HH:mm') },
        // { name: 'timeEnd', align: 'right', label: 'סיום', field: row => date.formatDate(row.time_end, 'HH:mm') || '-' },
        // { name: 'totalTime', align: 'right', label: 'זמן', field: row => diffInMinute(row.time_end, row.time_start) },
        { name: 'details', align: 'left', label: 'פרטים' },
        { name: 'comment', align: 'left', label: 'הערות', field: 'comment' }
      ]
    }
  },
  computed: {
    _: () => _,
    diffInMinute: () => diffInMinute,
    query () {
      return this.$route.query
    },
    filterExplain () {
      if (this.query.id) {
        return 'דיווח יחיד'
      }

      const typeName = this.$store.getters['activities/getName'](this.query.type)

      if (this.query.total) {
        return typeName + ' שנתי'
      }

      return typeName + ' בשבוע'
    },
    allActivities () {
      return this.$store.state.activities.activities
    },
    ...mapState('activities', [
      'summary'
      // 'metadata',
      // 'weeks'
    ]),
    activities () {
      let path = []
      if (this.query.total) {
        path = path.concat(['total'])
      } else if (this.query.week) {
        path = path.concat(['weeks', this.query.week])
      }

      path = path.concat([this.query.type, 'items'])

      let data = _.get(this.summary, path, [])
      data = data.map(el => ({ ...el, ..._.get(this.allActivities, el.id, {}) }))

      if (this.query.id) {
        const id = _.toInteger(this.query.id)
        data = data.filter(el => el.id === id)
      }

      return data
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
      // const location = `/activities/edit/${row.id}`
      const query = { total: true, type: row.type_id, id: row.id }

      this.$router.push({ path: '/activities/list', query })
      // window.console.log({ id: row.id })
      // this.$router.push(location)
    },
    async deleteCurrActivity () {
      const id = _.toInteger(this.query.id)

      if (!(id > 0)) {
        window.alert('חסר מזהה דיווח, אם הבעייה ממשיכה פנו לתמיכה.')
        return
      }

      const isConfirmed = window.confirm('האם למחוק דיווח זה?')

      if (!isConfirmed) {
        return
      }

      this.$q.loading.show({ delay: 400 })

      try {
        await this.$store.dispatch('activities/deleteRow', { id })
      } catch (err) {
        const message = _.get(err, 'response.data.message', 'תקלה לא ידועה')
        this.$q.notify({ message, position: 'center' })
      }

      await this.$store.dispatch('activities/load', {})

      this.$q.loading.hide()

      this.$router.back()
    }
  },
  async mounted () {
    this.loading = true
    await this.$store.dispatch('activities/load', {})
    this.loading = false
  }
}
</script>
