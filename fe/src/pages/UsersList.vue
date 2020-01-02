<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 560px">
      <q-table
        title="רשימת משתמשים"
        :data="users"
        :columns="columns"
        row-key="id"
        @row-click="editRow"
        :grid="$q.screen.xs"
      />
    </div>
  </q-page>
</template>

<script>
import { date } from 'quasar'
import { mapState } from 'vuex'

export default {
  name: 'PageUsersList',
  data () {
    return {
      users: [],
      columns: [
        { name: 'name', align: 'left', label: 'שם', field: 'name', sortable: true },
        { name: 'id_card', align: 'center', label: 'ת.ז.', field: 'id_card', sortable: true },
        { name: 'email', align: 'right', label: 'email', field: 'email', sortable: true },
        { name: 'created_at', align: 'right', label: 'תאריך יצירה', field: row => date.formatDate(row.created_at, 'YYYY-MM-DD'), sortable: true }
        // { name: 'timeStart', align: 'right', label: 'התחלה', field: row => date.formatDate(row.time_start, 'HH:mm') },
        // { name: 'timeEnd', align: 'right', label: 'סיום', field: row => date.formatDate(row.time_end, 'HH:mm') || '-' },
        // { name: 'totalTime', align: 'right', label: 'זמן', field: row => diffInMinute(row.time_end, row.time_start) }
      ]
    }
  },
  computed: {
    ...mapState('activities', [
      'activities'
    ])
  },
  methods: {
    editRow (e, row) {
      window.console.log(row)
    }
  },
  async mounted () {
    this.users = await this.$store.dispatch('user/getList', {})
  }
}
</script>
