<template>
  <v-app>
    <div>
      <v-app-bar app>
        <v-toolbar-title class="headline text-uppercase">
          <span class="font-weight-light">授業さぼりカウントアプリ</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn href="#">
          <span class="mr-2">ゲームしたい・・・</span>
        </v-btn>
      </v-app-bar>
    </div>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="name" :counter="10" label="授業名" @keyup.enter="addTodo" required></v-text-field>
          </v-col>
        </v-row>
        <div v-for="todo in todos" :key="todo.name">
          <v-card max-width="344" class="mx-auto">
            <v-card-title>{{todo.name}}</v-card-title>
            <v-card-text>
              <v-text-field label="メモ"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="increment" color="primary">さぼり回数</v-btn>
              {{ count }}
              <v-btn @click="decrement" color="error">間違え</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    count: 0,
    name: "",
    todos: []
  }),
  methods: {
    addTodo() {
      this.todos.push({
        name: this.name
      });
      this.name = "";
    },
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
};
</script>