<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="name" label="授業名" @keyup.enter="addTodo" required></v-text-field>
          </v-col>
        </v-row>
        <div v-for="(todo,index) in todos" :key="todo.name">
          <v-card card_id max-width="344" class="mx-auto">
            <v-card-title>{{todo.name}}</v-card-title>
            <v-card-text>
              <v-text-field label="メモ"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="increment(todo)" color="primary">さぼり回数</v-btn>
              <span>{{ todo.count }}</span>
              <v-btn @click="decrement(todo)" color="error">間違い（－）</v-btn>
              <v-btn @click="deleteItem(index)">削除</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      name: "",
      todos: []
    };
  },
  created() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.name = JSON.parse(localStorage.getItem("name")) || [];
    this.count = JSON.parse(localStorage.getItem("count")) || [];
  },
  methods: {
    addTodo() {
      if (this.name != "") {
        this.todos.push({
          name: this.name,
          count: 0
        });
      }
      let setJson = JSON.stringify(this.todos);
      let setName = JSON.stringify(this.name);
      let setCount = JSON.stringify(this.count);
      localStorage.setItem("todos", setJson);
      localStorage.setItem("name", setName);
      localStorage.setItem("count", setCount);
      this.name = "";
    },
    increment(todo) {
      todo.count++;
    },
    decrement(todo) {
      if (todo.count > 0) {
        todo.count--;
      }
    },
    deleteItem(index) {
      this.todos.splice(index, 1);
      let setJson = JSON.stringify(this.todos);
      localStorage.removeItem("todos");
      localStorage.setItem("todos", setJson);
    }
  }
};
</script>