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
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("setTodos");
  },
  methods: {
    ...mapActions([
      "templateJson",
      "increment",
      "decrement",
      "addMemo",
      "addTodo",
      "deleteItem"
    ])
  }
};
</script>