<template>
  <v-app>
    <Toolbar :items="navbarItems" />

    <!-- Navigation Drawer -->
    <v-navigation-drawer dark app permanent absolute clipped style="height: 100%">
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
        <v-list-item-group v-model="selectedNavbarItem" color="">
          <v-list-item
            v-for="item in navbarItems"
            :key="item.title"
            link
            @click="$router.push(item.url)"
          >
            <v-list-item-icon>
              <v-icon> {{ item.icon }} </v-icon>
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
      <v-btn v-for="(item, i) in navbarItems" :key="i" @click="$router.push(item.url)">
        <span>{{item.title}}</span>

        <v-icon>{{item.icon}}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";

export default {
  name: "App",
  components: {
    Toolbar,
  },
  data: () => ({
    navbarItems: [
      {
        favorite: true,
        title: "Home",
        icon: "mdi-home",
        url: "/",
      },
      {
        favorite: true,
        title: "Recents",
        icon: "mdi-rocket-launch-outline",
        url: "/recents",
      },
      {
        favorite: false,
        title: "Favorites",
        icon: "mdi-heart",
        url: "/favorites",
      },
      {
        favorite: true,
        title: "Nearby",
        icon: "mdi-map-marker",
        url: "/nearby",
      },
    ],
    selectedNavbarItem: 0,
    selectedBottombarItem: 0,
  }),
  beforeMount() {
    this.$store.dispatch("getPlanets")
  }
};
</script>
