import { axiosInstance } from 'boot/axios'

async function load (context, payload) {
  const data = {}
  const response = await axiosInstance.get('/activities/getSummary', data)

  context.commit('setActivities', response.data)

  return true
}

async function add (_, payload) {
  const res = await axiosInstance.post('/activities/add', payload)
  window.console.log(res)
  // if res.

  return true
}

export {
  load,
  add
}
