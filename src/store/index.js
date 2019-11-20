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
  getters: {
    getItemJson(state) {
      state.todo = JSON.parse(localStorage.getItem("state.todos")) || [];
    }
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer
    },
    templateJson(state) {
      state.todos = JSON.parse(localStorage.getItem("state.todos")) || [];
      let setJson = JSON.stringify(state.todos);
      localStorage.setItem("state.todos", setJson);
    },
    addMemo() {
      this.templateJson();
      this.isActive = false;
    },
    addTodo(state) {
      if (state.name != "") {
        state.todos.push({
          name: state.name,
          count: state.count
        });
      }
      state.name = "";
      this.templateJson();
    },
    increment(state) {
      state.count++;
      this.templateJson();
    },
    decrement(state) {
      if (state.count > 0) {
        state.count--;
      }
      this.templateJson();
    },
    deleteItem(state, index) {
      state.todos.splice(index, 1);
      let setJson = JSON.stringify(state.todos);
      localStorage.removeItem("state.todos");
      localStorage.setItem("state.todos", setJson);
    }
  },
  actions: {
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu")
    },
    templateJson({ commit }) {
      commit("templateJson")
    },
    addMemo({ commit }) {
      commit("addMemo")
    },
    addTodo({ commit }) {
      commit("addTodo")
    },
    deleteItem({ commit }, index) {
      commit("deleteItem", index)
    },
    increment({ commit }, state) {
      commit("increment", state)
    },
    decrement({ commit }, state) {
      commit("decrement", state)
    },
  }
})
