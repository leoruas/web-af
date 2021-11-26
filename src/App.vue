<template>
  <v-app>
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

    <!-- Navigation Drawer -->
    <v-navigation-drawer dark app permanent absolute clipped>
      <div>
        <v-list-item>
          <v-list-item-avatar color="grey lighten-2" size="64">
            <v-img src="./assets/Elgyem.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title style="font-weight: 500; font-size: 110%"
              >Elgyem</v-list-item-title
            >
            <v-list-item-subtitle>elgyem@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-divider></v-divider>

      <v-list>
        <v-subheader>PLANETS</v-subheader>
        <v-list-item-group v-model="selectedNavbarItem" color="">
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

    <!-- Content -->
    <v-main class="pa-0">
      <router-view></router-view>
    </v-main>

    <!-- Footer -->
    <v-footer absolute app dark>
      <v-col class="text-center pa-0" cols="12">
        {{ new Date().getFullYear() }} — <strong>Planetarium</strong>
      </v-col>
    </v-footer>

    <!-- Bottom Navigation -->
    <v-bottom-navigation app dark v-model="selectedBottombarItem">
      <v-btn value="recent">
        <span>Recent</span>

        <v-icon>mdi-rocket-launch-outline</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
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
    selectedNavbarItem: 0,
    selectedBottombarItem: 0,
  }),
};
</script>
