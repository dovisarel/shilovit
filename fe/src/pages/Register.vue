<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
      <h1 class="text-h3 text-center q-ma-none q-pb-lg">הרשמה</h1>
      <q-form class="q-gutter-md" @submit="doRegister">
        <q-input
          filled
          v-model="idCard"
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
            val => val && val.length > 6 || 'קצר מידי',
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

      <pre dir="ltr">{{ errors }}</pre>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageRegister',
  data () {
    return {
      idCard: '123456789',
      name: 'aaaaaa',
      email: 'aa@aa.aa',
      password: '123456789',
      errors: {}
    //   rememberMe: false
    }
  },
  methods: {
    async doRegister () {
      const newUser = {
        id_card: this.idCard,
        name: this.name,
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('user/register', newUser)

        this.$router.push('user/login')
      } catch (error) {
        this.errors = error.response.data.errors
      }
    }
  }
}
</script>
