import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    isUserLoggedIn: false
  },
  getters: {
    getUserState(state){
      return state.isUserLoggedIn
    }
  },
  mutations: {
    switchUserState(state, payload){
      state.isUserLoggedIn = !state.isUserLoggedIn
    }
  },
  actions: {
  },
  plugins: [createPersistedState()]
})
