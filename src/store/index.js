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
  // getters: {
  //   getItemJson() {
  //     return JSON.parse(localStorage.getItem("state.todos")) || [];
  //   }
  // },
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
    },
    addMemo(state) {
      state.templateJson();
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
      state.templateJson;
    },
    increment(state, todo) {
      todo.count++;
      this.templateJson();
    },
    decrement(state, todo) {
      if (todo.count > 0) {
        todo.count--;
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
    increment({ commit }, todo) {
      commit("increment", todo)
    },
    decrement({ commit }, todo) {
      commit("decrement", todo)
    },
  }
})
