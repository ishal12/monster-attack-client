<template>
  <v-app-bar density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>{{ username }} | {{ store.score }}</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import { store } from "@/store/store";
import userService from "@/services/user.service";
export default {
  data: () => ({
    username: "",
    store,
  }),
  methods: {
    renderUser() {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user && user.token) {
        userService.getUser(user._id).then((user) => {
          this.username = user.data.username;
          this.store.score = user.data.score;
        });
      }
    },
  },
  mounted() {
    this.renderUser();
  },
};
</script>
