import Vue from 'vue'
import Vuex from 'vuex'
import teamModule from './modules/teamModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    teamModule
  }
});