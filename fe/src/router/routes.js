import AuthLayout from 'layouts/AuthLayout.vue'
import NotAuthLayout from 'layouts/NotAuthLayout.vue'

const notAuthRouters = [
  {
    path: '/user',
    component: NotAuthLayout,
    children: [
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', component: () => import('pages/Register.vue') }
    ]
  }
]

const activitiesRouters = [
  {
    path: '/',
    component: AuthLayout,
    children: [
      { path: '/', component: () => import('pages/dashboard.vue') }
    ]
  },
  {
    path: '/user',
    component: AuthLayout,
    children: [
      { path: 'list', component: () => import('pages/UsersList.vue') }
    ]
  },
  {
    path: '/activities',
    component: AuthLayout,
    children: [
      { path: 'add', component: () => import('pages/activitiesAdd.vue') },
      // { path: 'add', component: () => import('pages/activitiesAddEdit.vue') },
      // { path: 'edit/:id', component: () => import('pages/activitiesAddEdit.vue'), props: true },
      { path: 'list', component: () => import('pages/activitiesList.vue') }
    ]
  }
]

const routes = [
  ...notAuthRouters,
  ...activitiesRouters,
  {
    path: '/',
    component: AuthLayout,
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
