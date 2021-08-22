import Vue from 'vue'
import Vuex from 'vuex'
import { moduleMembers } from './moduleMembers.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    $members: moduleMembers
  }
})
