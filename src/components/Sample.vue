<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="6"></v-col>
        </v-row>
        <div v-for="(product,index) in products" :key="product.names">
          <v-card card_id max-width="344" class="mx-auto">
            <v-card-title>{{product.names}}</v-card-title>
            <v-card-text>
              <v-text-field label="メモ" v-model="product.memo" @input="addMemo"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="increment(product)" color="primary">さぼり回数</v-btn>
              <span>{{ product.counts }}</span>
              <v-btn @click="decrement(product)" color="error">間違い（－）</v-btn>
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
  name: "sample",
  data() {
    return {
      products: [{ counts: 0, names: "sample", memos: "" }]
    };
  },
  mounted() {
    this.products = JSON.parse(localStorage.getItem("this.products")) || [];
  },
  methods: {
    templateJson() {
      let setJson = JSON.stringify(this.products);
      localStorage.setItem("this.products", setJson);
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
    increment(product) {
      product.counts++;
      this.templateJson();
    },
    decrement(product) {
      if (product.counts > 0) {
        product.counts--;
      }
      this.templateJson();
    },
    deleteItem(index) {
      this.products.splice(index, 1);
      this.templateJsonz();
    }
  }
};
</script>