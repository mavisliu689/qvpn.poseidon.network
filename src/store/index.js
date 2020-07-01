import Vue from 'vue'
import Vuex from 'vuex'
import service from './modules/service.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    service
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
