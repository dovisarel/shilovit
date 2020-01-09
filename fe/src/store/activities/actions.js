import { axiosInstance } from 'boot/axios'

async function load (context, payload) {
  const data = {}
  const response = await axiosInstance.get('/activities/getSummary', data)

  context.commit('setActivities', response.data)

  return true
}

async function add (_, payload) {
  await axiosInstance.post('/activities/add', payload)

  return true
}

export {
  load,
  add
}
