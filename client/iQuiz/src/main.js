// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/index'

Vue.prototype.$http = axios.create({
  baseURL: 'https://localhost:4000/api/',
  timeout: 1000,
  headers: {'x-access-token': 'this.$store.state.token'}
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
