<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="$store.state.name" label="授業名" @keyup.enter="addTodo" required></v-text-field>
          </v-col>
        </v-row>
        <div v-for="(todo,index) in ($store.state.todos)" :key="todo.name">
          <v-card card_id max-width="344" class="mx-auto">
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
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.state.todos =
      JSON.parse(localStorage.getItem("this.$store.state.todos")) || [];
  },
  methods: {
    templateJson() {
      let setJson = JSON.stringify(this.$store.state.todos);
      localStorage.setItem("this.$store.state.todos", setJson);
    },
    addMemo() {
      this.templateJson();
      this.isActive = false;
    },
    addTodo() {
      if (this.name != "") {
        this.$store.state.todos.push({
          name: this.$store.state.name,
          count: this.$store.state.count
        });
      }
      this.templateJson();
      this.$store.state.name = "";
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
      this.$store.state.todos.splice(index, 1);
      let setJson = JSON.stringify(this.$store.state.todos);
      localStorage.removeItem("this.$store.state.todos");
      localStorage.setItem("this.$store.state.todos", setJson);
    }
  }
};
</script>