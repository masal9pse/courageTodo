<template>
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list class="pa-1">
      <v-list-item avatar>
        <v-list-item-avatar>
          <img
            src="https://user-images.githubusercontent.com/51937772/68997336-95fc5b80-08e8-11ea-98ba-3a6751861205.png"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Alone Production</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-item v-for="item in items" :key="item.title" :to="item.link">
        <v-list-item-action>
          <v-icon color="info">{{ item.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "ホーム", icon: "mdi-domain", link: { name: "home" } },
        {
          title: "連絡先一覧",
          icon: "mdi-message-text",
          link: { name: "addresses" }
        }
      ]
    };
  }
};
</script>