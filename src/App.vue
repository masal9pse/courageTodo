<template>
  <v-app>
    <div>
      <v-app-bar app>
        <v-app-bar-nav-icon @click="toggleSideMenu"></v-app-bar-nav-icon>
        <v-toolbar-title class="headline text-uppercase">
          <span class="font-weight-light">講義さぼりカウントアプリ</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      <Count />
      <SideNav />
    </div>
  </v-app>
</template>

<script>
import Count from "./components/Count";
import SideNav from "./components/SideNav";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    Count,
    SideNav
  },
  methods: {
    ...mapActions(["toggleSideMenu"])
  }
};
</script>