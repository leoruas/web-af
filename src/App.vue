<template>
  <v-app>
    <!-- System Bar -->
    <v-system-bar dark app color="grey darken-3">
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </v-system-bar>

    <!-- App bar  -->
    <v-app-bar color="grey darken-4" dark app absolute clipped-left>
      <v-icon left>mdi-earth</v-icon>
      <v-toolbar-title>Planetarium</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-alien</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer app permanent absolute clipped color="grey lighten-3">
      <v-sheet class="pa-1">
        <v-list-item>
          <v-list-item-avatar color="grey darken-3" size="64">
            <v-img src="./assets/Elgyem.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title style="font-weight: 500; font-size: 110%"
              >Elgyem</v-list-item-title
            >
            <v-list-item-subtitle>elgyem@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item-group v-model="selectedItem" color="">
          <v-list-item v-for="item in navbarItems" :key="item.title" link>
            <v-list-item-icon>
              <v-icon v-if="item.favorite" color="#ffda21"> mdi-star </v-icon>
              <v-icon v-else> mdi-star-outline </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    navbarItems: [
      {
        favorite: true,
        title: "Uranus",
      },
      {
        favorite: true,
        title: "Earth",
      },
      {
        favorite: false,
        title: "Jupiter",
      },
      {
        favorite: true,
        title: "Saturn",
      },
      {
        favorite: false,
        title: "Neptune",
      },
      {
        favorite: true,
        title: "Mars",
      },
    ],
    selectedItem: 0,
  }),
};
</script>
