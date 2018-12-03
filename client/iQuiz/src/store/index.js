import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    token: 'lol'
  },
  getters: {
    getToken: (state) => {
      return state.token
    }
  },
  mutations: {

  },
  actions: {
  }
})
