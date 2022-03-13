<template>
  <v-app>
    <v-layout>
      <DashboardNavbar />

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->

          <router-view></router-view>
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
    //
  }),
};
</script>
