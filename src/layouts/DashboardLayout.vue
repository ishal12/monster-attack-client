<template>
  <v-app>
    <v-layout>
      <DashboardNavbar :key="score_reload" />

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->

          <router-view :method="reload"></router-view>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import DashboardNavbar from "./DashboardNavbar.vue";

export default {
  components: {
    DashboardNavbar,
  },

  data: () => ({
    score_reload: 0,
  }),
  methods: {
    // when reload() called, component dashboad reloaded
    reload() {
      this.score_reload++;
    },
  },
};
</script>
