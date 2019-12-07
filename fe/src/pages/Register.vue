<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
      <h1 class="text-h3 text-center q-ma-none q-pb-lg">הרשמה</h1>
      <q-form class="q-gutter-md" @submit="doRegister">
        <q-input
          filled
          v-model="ID"
          label="תעודת זהות"
          lazy-rules
          :rules="[
            val => !!val || 'ערך חובה',
            val => [8, 9].includes(val.trim().length) || 'קצר מידי',
            val => !/\D+/.test(val.trim()) || 'יש תווים לא תקינים',
          ]"
        />

        <q-input
          filled
          v-model="name"
          label="שם"
          hint="שם מלא בעברית"
          lazy-rules
          :rules="[ val => val && val.length > 5 || 'קצר מידי']"
        />

        <q-input
          filled
          v-model="email"
          label="מייל"
          hint="כתובת מייל"
          lazy-rules
          :rules="[
            val => val && val.length > 3 || 'קצר מידי',
            val => /\S+@\S+\.\S+/.test(val.trim()) || 'מייל לא תקין',
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="ססמה"
          lazy-rules
          :rules="[val => val && val.trim().length >= 6 || 'הססמה קצרה מידי']"
        />

        <!-- <q-toggle v-model="rememberMe" label="זכור אותי" /> -->

        <div>
          <q-btn type="sumbit" label="הרשמה" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageRegister',
  data () {
    return {
      ID: '',
      name: '',
      email: '',
      password: ''
    //   rememberMe: false
    }
  },
  methods: {
    doRegister () {
      const newUser = {
        id: this.ID,
        name: this.name,
        email: this.email,
        password: this.password
      }
      // this.$store.dispath('user/register', newUser)
      window.console.log('TODO: ...', newUser)
    }
  }
}
</script>
