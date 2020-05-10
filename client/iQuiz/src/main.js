// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/index'
import VueMaterialIcon from 'vue-material-icon'
import VeeValidate from 'vee-validate';
import Vuebar from 'vuebar';
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'


Vue.config.productionTip = false

Vue.use(Vuebar);
Vue.use(VeeValidate);
Vue.use(VueGoodTablePlugin);
Vue.component(VueMaterialIcon.name, VueMaterialIcon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
