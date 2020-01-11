<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
      <h1 class="text-h4 text-center q-ma-none q-pb-lg">הוספת דיווח</h1>
      <q-form class="q-gutter-xs" @submit="doAdd">
        <q-select
          v-model="activityTypeConfig"
          label="סוג הפעילות"
          :options="activitiesTypesList()"
          __emit-value
          map-options
          :rules="[
            val => val.value || 'לא נבחר סוג',
          ]"
        />

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

        <q-input  v-if="_.get(activityTypeConfig, 'showStartTime')" dense label="התחלה" dir="ltr" filled v-model="startTime" mask="time" :rules="['time']">
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

        <q-input v-if="_.get(activityTypeConfig, 'showEndTime')" dense label="סיום" dir="ltr" filled v-model="endTime" mask="time" :rules="[() => true]">
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

        <q-input
          v-if="_.get(activityTypeConfig, 'showScore')"
          type="text"
          dense
          min="0"
          max="100"
          label="ציון"
          dir="ltr"
          filled
          :autofocus="false"
          v-model.number="score"
          :rules="[
            val => _.toSafeInteger(val) == val || 'הציון חייב להיות מספר שלם',
            val => val > 0 || 'הציון לא יכול להיות מתחת אפס',
            val => val <= 100 || 'הציון לא יכול להיות מעל 100'
          ]"
        />

        <div>
          <q-btn type="submit" label="הוספה" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { date } from 'quasar'
import _ from 'lodash'

export default {
  name: 'PageActivitiesAdd',
  data () {
    return {
      activityTypeConfig: {},
      date: date.formatDate(Date.now(), 'YYYY-MM-DD'),
      startTime: date.formatDate(Date.now(), 'H:mm'),
      endTime: '',
      score: null
    }
  },
  computed: {
    _: () => _, // lodash
    activityType () {
      return _.get(this.activityTypeConfig, 'value')
      // return this.activityTypeConfig && this.activityTypeConfig.value
    }
  },
  methods: {
    activitiesTypesList () {
      return [
        { label: 'לימוד', value: 1, showStartTime: true, showEndTime: true },
        { label: 'שיעור הרב יזהר', value: 2 },
        { label: 'שיעור הרב מלמד', value: 3 },
        { label: 'מבחן חודשי', value: 4, showScore: true },
        { label: 'יחידות שקידה', value: 5, showStartTime: true, showEndTime: true }
      ]
    },
    vadidateDate (dateString) {
      return date.isValid(dateString)
    },
    async doAdd () {
      this.$q.loading.show()

      const data = {
        activityType: this.activityType,
        date: this.date,
        startTime: this.startTime,
        endTime: this.endTime,
        score: this.score || 0
      }

      try {
        const res = await this.$store.dispatch('activities/add', data)

        if (res) {
          this.$q.notify('נשמר בהצלחה')
        }
      } catch (error) {
        const data = _.get(error, 'response.data')
        this.$q.notify({
          message: data.message,
          caption: Object.values(data.errors)[0][0],
          multiLine: true
        })
        throw error
      } finally {
        this.$q.loading.hide()
      }
    }
  }
}
</script>
