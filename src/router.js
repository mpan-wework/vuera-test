import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/route_left',
      name: 'route-left',
      component: () => import('./views/route-left.vue')
    },
    {
      path: '/route_right',
      name: 'route-right',
      component: () => import('./views/route-right.vue')
    },
    {
      path: '*',
      redirect: '/route_left'
    }
  ]
})
