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
          :error="errors.id_card && errors.id_card.length > 0"
          :error-message="errors.id_card && errors.id_card[0]"
        />

        <q-input
          filled
          v-model="name"
          label="שם"
          hint="שם מלא בעברית"
          lazy-rules
          :rules="[ val => val && val.length > 5 || 'קצר מידי']"
          :error="errors.name && errors.name.length > 0"
          :error-message="errors.name && errors.name[0]"
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
          :error="errors.email && errors.email.length > 0"
          :error-message="errors.email && errors.email[0]"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="ססמה"
          lazy-rules
          :rules="[val => val && val.trim().length >= 6 || 'הססמה קצרה מידי']"
          :error="errors.password && errors.password.length > 0"
          :error-message="errors.password && errors.password[0]"
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
      idCard: '',
      name: '',
      email: '',
      password: '',
      errors: {}
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

        this.$router.push('/user/login')
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          this.errors = error.response.data.errors
        } else {
          this.$q.notify('תקלה ביצירת המשתמש')
        }
      }
    }
  }
}
</script>
