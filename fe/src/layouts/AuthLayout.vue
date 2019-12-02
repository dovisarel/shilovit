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
          <q-btn icon="home" flat rounded to="/user/login" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-2">
      <q-list>
        <q-item-label header>קישורים חשובים חשובים</q-item-label>
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
export default {
  name: 'AuthLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    doLogout () {
      window.console.log('TODO: logout ...pqxnr393wrc0aw9')
    }
  }
}
</script>
