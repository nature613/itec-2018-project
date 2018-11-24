import Vue from 'vue'
import Router from 'vue-router'
import AddEvent from '@/components/AddEvent'
import Qrcode from '@/components/modules/qrcode'
import ShowAllEvents from '@/components/ShowAllEvents'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/addevent',
      name: 'AddEvent',
      component: AddEvent
    },
    {
      path: '/qrcode',
      name: 'Qrcode',
      component: Qrcode
    },
    {
      path: '/events',
      name: 'ShowAllEvents',
      component: ShowAllEvents
    },

  ]
})
