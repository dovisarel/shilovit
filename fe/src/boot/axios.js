import Vue from 'vue'
import axios from 'axios'

window.console.log(process.env.NODE_ENV)

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://shilovit3.localhost/' : '',
  withCredentials: true
  //   timeout: 1000,
  //   headers: { 'X-Custom-Header': 'foobar' }
})

Vue.prototype.$axios = axiosInstance

export { axiosInstance }
