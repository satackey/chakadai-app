import Vue from 'vue'
import Router from 'vue-router'
import Root from './views/Root.vue'
import Print from './views/Print.vue'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'root',
      component: Root
    },
    {
      path: '/print',
      name: 'print',
      component: Print
    },
  ]
})
