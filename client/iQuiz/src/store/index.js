import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    token: '',
    user: {},
    isUserLoggedIn: false
  },
  getters: {
    getToken: (state) => {
      return state.token
    },
    getUser: (state) =>{
      return state.user
    },
    getUserStatus: (state) =>{
      return state.isUserLoggedIn
    }
  },
  mutations: {
    setToken: (state, payload) => {
      state.token = payload;
      state.isUserLoggedIn = true
    },
    setUser: (state, payload) => {
      state.user = payload;
    },
    logoutUser: (state) => {
      state.token = '';
      state.user = {};
      state.isUserLoggedIn = false
    }
  },
  actions: {
  },
  plugins: [createPersistedState()]
})
