import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/add/payment/:type',
      name: 'AddPayment',
      component: Dashboard
    },
    {
      path: '/add/payment/*',
      name: 'AddPayment',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/*',
      redirect: {
        name: 'NotFound'
      }
    }
  ]
})

export default router
