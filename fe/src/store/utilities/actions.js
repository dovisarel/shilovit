import { axiosInstance } from 'boot/axios'

async function initialData (context) {
  const response = await axiosInstance.get('/initialData')
  const data = response.data

  context.commit('commitInitialData', data)

  axiosInstance.defaults.headers.common['X-CSRF-TOKEN'] = data.csrfToken
}

export {
  initialData
}
