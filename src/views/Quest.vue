<template>
  <v-row class="justify-center">
    <v-col cols="12" sm="8">
      <v-card class="mx-auto">
        <v-card-header>
          <v-card-header-text>
            <v-card-title class="justify-center">Quests</v-card-title>
          </v-card-header-text>
        </v-card-header>

        <v-table fixed-header height="400px">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in quests" :key="index">
              <td>{{ item.name }}</td>
              <td>
                <v-btn
                  @click="attack(item._id, index)"
                  flat
                  :disabled="isDisabled[index]"
                  color="secondary"
                  >Attack</v-btn
                >
              </td>
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

  <v-overlay :model-value="loading" class="align-center justify-center">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>

  <v-dialog v-model="dialog">
    <v-card>
      <v-card-text>
        {{ message }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="dialog = false">Return</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import questService from "@/services/quest.service";

export default {
  props: {
    method: { type: Function },
  },
  data() {
    return {
      quests: [{}],
      loading: false,
      dialog: false,
      message: "",
      isDisabled: [],
    };
  },
  methods: {
    attack(id, index) {
      // disabled button after cliked
      this.isDisabled[index] = true;
      setTimeout(() => {
        this.isDisabled[index] = false;
      }, 30000);

      this.loading = true;
      let user = JSON.parse(localStorage.getItem("user"));
      if (user && user.token) {
        questService.doQuest(id, user._id).then((response) => {
          this.loading = false;
          this.message = response.data.message;
          this.dialog = true;
          // reload navbar component
          this.method();
        });
      }
    },
  },
  mounted() {
    questService.getAllQuest().then((quests) => {
      this.quests = quests.data;
    });
  },
};
</script>
