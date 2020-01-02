<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>שילובית</q-toolbar-title>

        <div>
          <!-- <q-btn icon="home" flat rounded to="/user/login" /> -->
          <q-btn v-if="isAdmin" :label="user.name" icon="find_replace" flat rounded to="/user/list" />
          <q-btn v-else :label="user.name" flat rounded to="/" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-2">
      <q-list>
        <q-item-label header>קישורים חשובים</q-item-label>

        <q-item clickable tag="a" to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>דף הבית</q-item-label>
            <q-item-label caption>??? - ???</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" to="/activities/list">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>רשימת דיווחים</q-item-label>
            <q-item-label caption>??? - ???</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" to="/activities/add">
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>הוספת דיווח</q-item-label>
            <q-item-label caption>??? - ???</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" @click="doLogout">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>
            <q-item-label>התנתק</q-item-label>
            <q-item-label caption>ניתוק מהמערכת - צריך לעשות</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a">
          <q-item-section avatar>
            <q-icon name="picture_as_pdf" />
          </q-item-section>
          <q-item-section>
            <q-item-label>נהלי התוכנית</q-item-label>
            <q-item-label caption>צריך להוסיף, עדיין לא נמצא</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AuthLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  computed: mapState({
    isAuth: state => state.utilities.isAuth,
    isAdmin: state => state.utilities.isAdmin,
    user: state => state.utilities.user
  }),
  methods: {
    async doLogout () {
      try {
        await this.$store.dispatch('user/logout')

        location.reload(true)
      } catch (error) {
        this.$q.notify('תקלה')
      }
    }
  },
  async mounted () {
    await this.$store.dispatch('utilities/initialData')

    if (!this.isAuth) {
      this.$router.push('/user/login')
    }
  }
}
</script>
