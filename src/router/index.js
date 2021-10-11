import Vue from 'vue'
import Router from 'vue-router'

// import Dashboard from '../views/Dashboard.vue'
// import About from '../views/About.vue'
// import NotFound from '../views/NotFound.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "PageDashBoard" */'../views/Dashboard.vue')
    },
    {
      path: '/add/payment/:type',
      name: 'AddPayment',
      component: () => import(/* webpackChunkName: "PageDashBoard" */'../views/Dashboard.vue')
    },
    {
      path: '/add/payment/*',
      name: 'AddPayment',
      component: () => import(/* webpackChunkName: "PageDashBoard" */'../views/Dashboard.vue')
    },
    {
      path: '/calc',
      name: 'Calculator',
      component: () => import(/* webpackChunkName: "PageDashBoard" */'../views/Calculete.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "PageAbout" */'../views/About.vue')
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: "PageNotFound" */'../views/NotFound.vue')
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
