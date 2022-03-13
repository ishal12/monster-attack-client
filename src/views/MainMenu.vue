<template>
  <v-row class="justify-center">
    <v-col cols="12" sm="8">
      <v-card class="mx-auto">
        <v-card-header>
          <v-card-header-text>
            <v-card-title class="justify-center">Monster Attack</v-card-title>
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
          <v-btn :to="{ name: 'register' }" flat color="secondary"
            >Register</v-btn
          >
          <v-btn :to="{ name: 'login' }" flat color="secondary">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>