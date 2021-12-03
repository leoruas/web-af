<template>
  <v-main style="background-color: #303030; height: 100%">
    <v-row style="color: white" class="pa-4">
      <v-col cols="12" style="text-align: justify">
        <h1>Nearby</h1>
        <v-divider class="background-color: white mb-3"></v-divider>

        <v-row>
          <v-col v-for="(planet, p) in nearby" :key="p" cols="3">
            <PlanetCard :planet="planet" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import PlanetCard from "@/components/PlanetCard.vue";

export default {
  components: {
    PlanetCard,
  },
  computed: {
    nearby() {
      return this.$store.getters.nearby;
    },
  },
};
</script>