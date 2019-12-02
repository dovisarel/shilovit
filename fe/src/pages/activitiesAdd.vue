<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
      <h1 class="text-h4 text-center q-ma-none q-pb-lg">הוספת דיווח</h1>
      <q-form class="q-gutter-xs">
        <q-select v-model="activityType" :options="activitiesTypesList()" ___map-options label="סוג הפעילות" />

        <q-input
          dense
          label="תאריך"
          dir="ltr"
          class="text-center"
          filled
          v-model="date"
          mask="####-##-##"
          fill-mask
          :rules="[ val => val && vadidateDate(val) || 'תאריך לא תקין']"
        >
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date
                  v-model="date"
                  mask="YYYY-MM-DD"
                  today-btn
                  @input="() => $refs.qDateProxy.hide()"
                />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input dense label="התחלה" dir="ltr" filled v-model="startTime" mask="time" :rules="['time']">
          <template v-slot:prepend>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="startTime">
                  <div class="row items-center justify-center q-gutter-sm">
                    <q-btn label="אישור" color="primary" v-close-popup />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input dense label="סיום" dir="ltr" filled v-model="endTime" mask="time" :rules="['time']">
          <template v-slot:prepend>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="endTime">
                  <div class="row items-center justify-center q-gutter-sm">
                    <q-btn label="אישור" color="primary" v-close-popup />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <div>
          <q-btn label="הוספה" color="primary" @click="doAdd" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'PageActivitiesAdd',
  data () {
    return {
      activityType: null,
      date: date.formatDate(Date.now(), 'YYYY-MM-DD'),
      startTime: date.formatDate(Date.now(), 'H:mm'),
      endTime: ''
    }
  },
  methods: {
    activitiesTypesList () {
      return [
        { label: 'לימוד', value: 1, description: 'Search engine' },
        { label: 'שיעור אמונה', value: 2, description: 'Search engine' },
        { label: 'שיעור הלכה', value: 3, description: 'Search engine' }
      ]
    },
    vadidateDate (dateString) {
      return date.isValid(dateString)
    },
    doAdd () {
      window.console.log('TODO: ...')
    }
  }
}
</script>
