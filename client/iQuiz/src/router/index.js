import Vue from 'vue'
import Router from 'vue-router'

import AddEvent from '@/components/AddEvent'
import ShowAllEvents from '@/components/ShowAllEvents/index'
import ShowEvent from '@/components/ShowEvent'

import AddQuestion from '@/components/QuestionForm/AddQuestion'
import ShowAllQuestions from '@/components/ShowAllQuestions/index'
import EditQuestion from '@/components/QuestionForm/EditQuestion'

import AddQuiz from '@/components/AddQuiz'
import Qrcode from '@/components/modules/qrcode'

import About from '@/components/About'
import Profile from '@/components/Profile'
import Login from '@/components/Login'
import Register from '@/components/Register'

import Dashboard from '@/components/Dashboard'
import AccessDenied from '@/components/AccessDenied'

import Feedback from '@/components/New/Feedback';

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '*',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        guest: true
      }
    },   
    {
      path: '/about',
      name: 'About',
      component: About
    },

    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { 
        // requiresAuth: true,
        // is_admin : true
      }
    },

    {
      path: '/addquestion',
      name: 'AddQuestion',
      component: AddQuestion,
      meta: { 
        requiresAuth: true,
        is_admin : true
      }
    },
    {
      path: '/questions',
      name: 'ShowAllQuestions',
      component: ShowAllQuestions,
      meta: { 
        requiresAuth: true,
        is_admin : true
      }
    },
    {
      path: '/questions/edit/:id',
      name: 'EditQuestion',
      component: EditQuestion,
      meta: { 
        requiresAuth: true,
        is_admin : true
      }
    },
    
    {
      path: '/addevent',
      name: 'AddEvent',
      component: AddEvent,
      meta: { 
        requiresAuth: true,
        is_admin : true
      }      
    },
    {
      path: '/events',
      name: 'ShowAllEvents',
      component: ShowAllEvents,
      meta: { 
        requiresAuth: true,
        is_admin : true
      }  
    },
    
    {
      path: '/event/:id',
      name: 'ShowEvent',
      component: ShowEvent
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
      path: '/quiz/:id',
      name: 'Feedback',
      component: Feedback
    },

    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { 
        requiresAuth: true
      }
    },

    {
      path: '/denied',
      name: 'Denied',
      component: AccessDenied
    }
  ]
})

router.beforeEach((to, from, next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
        next({path: '/login'})
    } 
    else {
      let user = JSON.parse(localStorage.getItem('user'))
      if(to.matched.some(record => record.meta.is_admin)) {
        if(user.admin == true){
          next()
        }
        else{
          next({ name: 'Denied'})
        }
      }
      else {
        next()
      }
    }
  }
  else if(to.matched.some(record => record.meta.guest)) {
    if(localStorage.getItem('jwt') === null){
      next()
    }
    else{
      next({ name: 'ShowAllEvents'})
    }
  }
  else {
    next() 
  }
})

export default router