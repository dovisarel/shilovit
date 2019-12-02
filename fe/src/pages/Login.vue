<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
      <h1 class="text-h3 text-center q-ma-none q-pb-lg">כניסה</h1>
      <q-form class="q-gutter-md">
        <q-input
          filled
          v-model="ID"
          label="תעודת זהות"
          hint="??? מה יהיה כאן?"
          lazy-rules
          :rules="[ val => val && val.length > 6 || 'שם המשתמש קצר מידי']"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="ססמה"
          lazy-rules
          :rules="[ val => val && val.length > 3 || 'הססמה קצרה מידי']"
        />

        <q-toggle v-model="rememberMe" label="זכור אותי" />

        <div>
          <q-btn label="כניסה" color="primary" @click="doLogin" />
          <q-btn label="הרשמה" type="a" color="primary" flat class="q-ml-sm" to="/user/register" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageLogin',
  data () {
    return {
      ID: '',
      password: '',
      rememberMe: false
    }
  },
  methods: {
    doLogin () {
      window.console.log('TODO: ...')
    }
  }
}
</script>
