<template>
  <v-row class="justify-center">
    <v-col cols="12" sm="8">
      <v-card class="mx-auto">
        <v-card-header>
          <v-card-header-text>
            <v-card-title class="justify-center">Leaderboard</v-card-title>
          </v-card-header-text>
        </v-card-header>

        <v-table fixed-header height="400px">
          <thead>
            <tr>
              <th class="text-left">Nickname</th>
              <th class="text-left">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in users" :key="item._id">
              <td>{{ item.username }}</td>
              <td>{{ item.score }}</td>
            </tr>
          </tbody>
        </v-table>

        <v-card-actions
          class="
            d-flex
            justify-space-around
            align-center
            flex-column flex-sm-row
            fill-height
          "
        >
          <v-btn :to="{ name: 'dashboard' }" flat color="secondary">Back</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import userService from "@/services/user.service";

export default {
  data() {
    return {
      users: [{}],
    };
  },
  mounted() {
    userService.leaderboard().then((users) => {
      this.users = users.data;
    });
  },
};
</script>
