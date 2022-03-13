<template>
  <v-row class="justify-center">
    <v-col cols="12" sm="8">
      <v-card class="mx-auto">
        <v-card-header>
          <v-card-header-text>
            <v-card-title class="justify-center">Log In</v-card-title>
          </v-card-header-text>
        </v-card-header>

        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              @click:append="show1 = !show1"
              hint="At least 8 characters"
              counter
              required
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions
          class="
            d-flex
            justify-space-around
            align-center
            flex-column flex-sm-row
            fill-height
          "
        >
          <v-btn @click="handleLogin" flat color="secondary">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import authService from "@/services/auth.service";

export default {
  data: () => ({
    valid: true,
    show1: false,
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length <= 16) || "Password must be less than 16 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    handleLogin() {
      this.$refs.form.validate().then(() => {
        const user = {
          email: this.email,
          password: this.password,
        };
        authService.login(user).then(() => {
          this.$router.push({ name: "dashboard" });
        });
      });
    },
  },
};
</script>
