<template>
  <v-app>
    <div>
      <v-app-bar app>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class="headline text-uppercase">
          <span class="font-weight-light">講義さぼりカウントアプリ</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      <Count />
    </div>
  </v-app>
</template>

<script>
import Count from "./components/Count";
export default {
  name: "App",
  components: {
    Count
  }
};
</script>