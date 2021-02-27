import Vue from 'vue'
import Router from 'vue-router'
import magnifying_glass_page from '@/components/magnifying_glass_page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'magnifying glass page',
      component:magnifying_glass_page
    }
  ]
})
