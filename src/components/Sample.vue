<template>
  <v-app>
    <!-- <div v-for="(product,index) in products" :key="product.names"> -->
    <!-- v-modelは同じテンプレート側のネストでは適応しないらしい -->
    <v-card card_id width="348" class="mx-auto" v-model="this.products">
      <v-card-title>サンプル</v-card-title>
      <v-card-text>
        <v-text-field label="'授業名'に予定を入力してください" v-model="this.memos" @input="addMemo"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="increment()" color="primary">さぼり回数(+)</v-btn>
        <span>{{ this.counts }}</span>
        <v-btn @click="decrement()" color="error">間違い(-)</v-btn>
        <!-- <v-btn @click="deleteItem">削除</v-btn> -->
      </v-card-actions>
    </v-card>
    <!-- </div> -->
  </v-app>
</template>

<script>
export default {
  name: "sample",
  data() {
    return {
      counts: 0,
      memos: "",
      products: []
    };
  },
  mounted() {
    this.memos = JSON.parse(localStorage.getItem("this.memos")) || [];
  },
  methods: {
    templateJson() {
      let setJson = JSON.stringify(this.memos);
      localStorage.setItem("this.memos", setJson);
    },
    templateJsonz() {
      let setJson = JSON.stringify(this.products);
      localStorage.removeItem("this.products");
      localStorage.setItem("this.products", setJson);
    },
    addMemo() {
      this.templateJson();
      this.isActive = false;
    },
    addTodo() {
      if (this.names != "") {
        this.products.push({
          names: this.names,
          counts: this.counts
        });
      }
      this.names = "";
      this.templateJson();
    },
    increment() {
      this.counts++;
      this.templateJson();
    },
    decrement() {
      if (this.counts > 0) {
        this.counts--;
      }
      this.templateJson();
    },
    deleteItem() {
      this.products.splice(1);
      this.templateJsonz();
    }
  }
};
</script>