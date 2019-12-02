<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
      <h1 class="text-h3 text-center q-ma-none q-pb-lg">הרשמה</h1>
      <q-form class="q-gutter-md">
        <q-input
          filled
          v-model="ID"
          label="תעודת זהות"
          lazy-rules
          :rules="[ val => val && val.length > 7 || 'קצר מידי']"
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
          hint="??? מה יהיה כאן?"
          lazy-rules
          :rules="[ val => val && val.length > 3 || 'קצר מידי']"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="ססמה"
          lazy-rules
          :rules="[ val => val && val.length > 3 || 'הססמה קצרה מידי']"
        />

        <!-- <q-toggle v-model="rememberMe" label="זכור אותי" /> -->

        <div>
          <q-btn label="הרשמה" color="primary" @click="doRegister" />
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
      window.console.log('TODO: ...')
    }
  }
}
</script>
