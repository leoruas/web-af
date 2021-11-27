<template>
  <div>
    <!-- System Bar -->
    <v-system-bar dark app color="grey darken-3">
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

      <div v-for="(item, i) in items" :key="i">
        <v-btn text class="mx-1" @click="$router.push(item.url)">
          {{ item.title }}
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: ["items"],
};
</script>