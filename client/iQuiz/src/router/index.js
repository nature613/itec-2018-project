import Vue from 'vue'
import Router from 'vue-router'
import AddEvent from '@/components/AddEvent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/addevent',
      name: 'AddEvent',
      component: AddEvent
    }
  ]
})
