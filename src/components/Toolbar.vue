<template>
  <div>
    <!-- System Bar -->
    <v-system-bar dark app color="grey darken-3">
      Home > Recent
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </v-system-bar>

    <!-- App bar  -->
    <v-app-bar dark app absolute clipped-left elevation="0">
      <v-icon left>mdi-ufo-outline</v-icon>
      <v-toolbar-title>Planetarium</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-alien</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>