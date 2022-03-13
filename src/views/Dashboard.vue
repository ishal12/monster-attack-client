<template>
  <v-row class="justify-center">
    <v-col cols="12" sm="8">
      <v-card class="mx-auto">
        <v-card-header>
          <v-card-header-text>
            <v-card-title class="justify-center">DASHBOARD</v-card-title>
          </v-card-header-text>
        </v-card-header>

        <v-card-actions
          class="
            d-flex
            justify-space-around
            align-center
            flex-column flex-sm-row
            fill-height
          "
        >
          <v-btn flat color="secondary">Quest</v-btn>

          <v-btn flat color="secondary">Leaderboard</v-btn>
          <v-btn @click="logout" flat color="error">Logout</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import authService from "@/services/auth.service";

export default {
  data: () => ({}),

  methods: {
    logout() {
      authService.logout();
      this.$router.push({ name: "main-menu" });
    },
  },
};
</script>
