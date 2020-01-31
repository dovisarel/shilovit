<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 560px">
      <q-table
        title="רשימת משתמשים"
        :data="users"
        :columns="columns"
        row-key="id"
        :grid="$q.screen.xs"
        :pagination.sync="pagination"
      >
        <template v-slot:body-cell-log_as_user="props">
          <q-td :props="props">
            <q-btn label="התחבר" color="primary" @click="emulateUser(props.row.id)" />
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
// import { date } from 'quasar'
import { mapState } from 'vuex'

export default {
  name: 'PageUsersList',
  data () {
    return {
      pagination: {
        sortBy: 'name',
        descending: false,
        page: 1,
        rowsPerPage: 25
      },
      users: [],
      columns: [
        { name: 'name', align: 'left', label: 'שם', field: 'name', sortable: true },
        { name: 'id_card', align: 'center', label: 'ת.ז.', field: 'id_card', sortable: true },
        { name: 'email', align: 'right', label: 'email', field: 'email', sortable: true },
        // { name: 'created_at', align: 'right', label: 'תאריך יצירה', field: row => date.formatDate(row.created_at, 'YYYY-MM-DD'), sortable: true },
        // { name: 'timeStart', align: 'right', label: 'התחלה', field: row => date.formatDate(row.time_start, 'HH:mm') },
        // { name: 'timeEnd', align: 'right', label: 'סיום', field: row => date.formatDate(row.time_end, 'HH:mm') || '-' },
        { name: 'log_as_user', align: 'center', label: 'התחבר כ...', field: 'id' }
      ]
    }
  },
  computed: {
    ...mapState('activities', [
      'activities'
    ])
  },
  methods: {
    async emulateUser (id) {
      await this.$store.dispatch('user/emulateUser', { id })
      this.$router.push('/')
      this.$nextTick(() => this.$router.go())
    }
  },
  async mounted () {
    this.users = await this.$store.dispatch('user/getList', {})
  }
}
</script>
