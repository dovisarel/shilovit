// import axios from 'axios'
import { axiosInstance } from 'boot/axios'
// import Vue from 'vue'

async function register (context, newUser) {
  try {
    const response = await axiosInstance.post('/user/register', newUser)
    // const response = await Vue.$axios.post('/api/register', newUser)
    const data = response.data
    return data
  } catch (error) {
    throw error
    // window.console.log(error)
    // this.$q.notify({
    //   color: 'negative',
    //   position: 'top',
    //   message: 'Loading failed',
    //   icon: 'report_problem'
    // })
  }
}

export {
  register
}
