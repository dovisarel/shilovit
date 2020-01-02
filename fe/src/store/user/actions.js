// import axios from 'axios'
import { axiosInstance } from 'boot/axios'
// import Vue from 'vue'

async function register (context, newUser) {
  const response = await axiosInstance.post('/user/register', newUser)
  return response.data
}

async function login (context, data) {
  const response = await axiosInstance.post('/user/login', data)
  return response.data
}

async function logout (context, data) {
  const response = await axiosInstance.post('/user/logout', data)
  return response.data
}

async function getList (context, data) {
  const response = await axiosInstance.get('/user/getList', data)
  return response.data.users
}

export {
  register,
  login,
  logout,
  getList
}
