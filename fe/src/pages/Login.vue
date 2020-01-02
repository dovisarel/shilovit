<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
      <h1 class="text-h3 text-center q-ma-none q-pb-lg">כניסה</h1>
      <q-form class="q-gutter-md" @submit="doLogin">
        <q-input
          filled
          v-model="id_card"
          label="תעודת זהות"
          __hint="??? מה יהיה כאן?"
          lazy-rules
          :rules="[ val => val && val.length > 6 || 'ת.ז. קצרה מידי']"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="ססמה"
          lazy-rules
          :rules="[ val => val && val.length >= 6 || 'הססמה קצרה מידי']"
        />

        <q-toggle v-model="rememberMe" label="זכור אותי" />

        <div>
          <q-btn type="submit" label="כניסה" color="primary" />
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
      errors: [],
      id_card: '300460151',
      password: '56546465',
      rememberMe: false
    }
  },
  methods: {
    async doLogin () {
      const data = {
        id_card: this.id_card,
        password: this.password,
        rememberMe: this.rememberMe
      }

      try {
        await this.$store.dispatch('user/login', data)

        this.$router.push('/')
      } catch (error) {
        const msg = (error.response && error.response.data && error.response.data.message) || 'תקלה בכניסה למערכת'
        this.$q.notify(msg)
      }
    }
  }
}
</script>
