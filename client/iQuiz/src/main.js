// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/index'
import VueMaterialIcon from 'vue-material-icon'
import VeeValidate from 'vee-validate';
import Vuebar from 'vuebar';

axios.defaults.timeout = 1000;

Vue.prototype.$http = axios.create({
  baseURL: 'https://localhost:4000/api/',
  timeout: 1000,
  headers: {'x-access-token': 'this.$store.state.token'}
})
Vue.config.productionTip = false

Vue.use(Vuebar);
Vue.use(VeeValidate)
Vue.component(VueMaterialIcon.name, VueMaterialIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
