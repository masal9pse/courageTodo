<template>
  <v-layout wrap style="height: 600px;">
    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img
              src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/439295/5bfb8334-edaf-1369-114d-c9cc0c750295.jpeg"
              class="example1"
            />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Masato</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: [{ title: "連絡先一覧", icon: "list" }]
    };
  }
};
</script>

<style scoped>
img.example1 {
  height: 200px;
  width: 300px;
}
</style>