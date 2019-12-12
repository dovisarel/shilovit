import Vue from 'vue'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://shilovit3.localhost/api/',
  withCredentials: false
  //   timeout: 1000,
  //   headers: { 'X-Custom-Header': 'foobar' }
})

Vue.prototype.$axios = axiosInstance

export { axiosInstance }
