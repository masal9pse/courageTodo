<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="name"
              label="授業名"
              @keyup.enter="addTodo"
              @click="addTodo"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <Sample />
        <div v-for="(todo,index) in todos" :key="todo.name">
          <v-card card_id max-width="344" class="mx-auto">
            <!-- <Sample /> -->
            <v-card-title>{{todo.name}}</v-card-title>
            <v-card-text>
              <v-text-field label="メモ" v-model="todo.memo" @input="addMemo"></v-text-field>
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
import Sample from "./Sample";

export default {
  data() {
    return {
      count: 0,
      name: "",
      memo: [],
      todos: []
    };
  },
  components: {
    Sample
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem("this.todos")) || [];
  },
  methods: {
    templateJson() {
      let setJson = JSON.stringify(this.todos);
      localStorage.setItem("this.todos", setJson);
    },
    templateJsonz() {
      let setJson = JSON.stringify(this.todos);
      localStorage.removeItem("this.todos");
      localStorage.setItem("this.todos", setJson);
    },
    addMemo() {
      this.templateJson();
      this.isActive = false;
    },
    addTodo() {
      if (this.name != "") {
        this.todos.push({
          name: this.name,
          count: this.count
        });
      }
      this.name = "";
      this.templateJson();
    },
    increment(todo) {
      todo.count++;
      this.templateJson();
    },
    decrement(todo) {
      if (todo.count > 0) {
        todo.count--;
      }
      this.templateJson();
    },
    deleteItem(index) {
      this.todos.splice(index, 1);
      this.templateJsonz();
    }
  }
};
</script>