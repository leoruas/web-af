<template>
  <v-content style="background-color: #303030; height: 100%">
    <v-row style="color: white" class="pa-4" justify="space-around">
      <v-col cols="7" style="text-align: justify">
        <h1>Uranus</h1>
        <v-divider class="background-color: white mb-3"></v-divider>
        Uranus is the seventh planet from the Sun. Its name is a reference to
        the Greek god of the sky, Uranus, who, according to Greek mythology, was
        the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and
        father of Cronus (Saturn). It has the third-largest planetary radius and
        fourth-largest planetary mass in the Solar System. Uranus is similar in
        composition to Neptune, and both have bulk chemical compositions which
        differ from that of the larger gas giants Jupiter and Saturn. For this
        reason, scientists often classify Uranus and Neptune as "ice giants" to
        distinguish them from the other giant planets. Uranus's atmosphere is
        similar to Jupiter's and Saturn's in its primary composition of hydrogen
        and helium, but it contains more "ices" such as water, ammonia, and
        methane, along with traces of other hydrocarbons. It has the coldest
        planetary atmosphere in the Solar System, with a minimum temperature of
        49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with
        water thought to make up the lowest clouds and methane the uppermost
        layer of clouds. The interior of Uranus is mainly composed of ices and
        rock.
      </v-col>

      <v-col cols="4">
        <v-img src="../assets/Uranus.png"></v-img>
      </v-col>
    </v-row>
  </v-content>
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
