import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    todos: [],
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer
    },
    setTodos(state) {
      state.todos = JSON.parse(localStorage.getItem("state.todos")) || [];
    },
    templateJson(state) {
      let setJson = JSON.stringify(state.todos);
      localStorage.setItem("state.todos", setJson);
    }
  },
  actions: {
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu")
    },
    templateJson({ commit }) {
      commit("templateJson")
    }
  }
})
