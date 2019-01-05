import Vue from 'vue'
import Router from 'vue-router'
import AddEvent from '@/components/AddEvent'
import AddQuestion from '@/components/AddQuestion'
import AddQuiz from '@/components/AddQuiz'
import Qrcode from '@/components/modules/qrcode'
import ShowAllEvents from '@/components/ShowAllEvents'
import ShowAllQuestions from '@/components/ShowAllQuestions'
import ShowEvent from '@/components/ShowEvent'
import About from '@/components/About'
import Profile from '@/components/Profile'
import Login from '@/components/Login'
import Register from '@/components/Register'
import EditQuestion from '@/components/EditQuestion'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login',
    },
    {
      path: '/addevent',
      name: 'AddEvent',
      component: AddEvent
    },
    {
      path: '/addquestion',
      name: 'AddQuestion',
      component: AddQuestion
    },
    {
      path: '/questions',
      name: 'ShowAllQuestions',
      component: ShowAllQuestions
    },
    {
      path: '/questions/edit/:id',
      name: 'EditQuestion',
      component: EditQuestion
    },    
    {
      path: '/event/:id/addquiz',
      name: 'AddQuiz',
      component: AddQuiz
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
    {
      path: '/about',
      name: 'About',
      component: About
    },    
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },    
    {
      path: '/register',
      name: 'Register',
      component: Register
    },    
    {
      path: '/login',
      name: 'Login',
      component: Login
    },    
    {
      path: '/event/:id',
      name: 'ShowEvent',
      component: ShowEvent
    },
  ]
})
