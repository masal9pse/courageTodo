import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    count: 0,
    name: "",
    todos: [],
    memo: []
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer
    }
  },
  actions: {
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu")
    }
  },
})
