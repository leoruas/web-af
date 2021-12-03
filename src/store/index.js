import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    planets: []
  },
  getters: {
    favorites(state) {
      return state.planets.filter((planet) => planet.isFavorite);
    },
    nearby(state) {
      return state.planets.filter((planet) => planet.isNearby);
    },
    recents(state) {
      return state.planets.filter((planet) => planet.isRecent);
    }
  },
  mutations: {
    setPlanets(state, payload) {
      state.planets = payload
    }
  },
  actions: {
    async getPlanets({commit}) {
      const res = await axios.get('https://simple-planet-api-web.herokuapp.com/planets')
      const { data } = res

      commit("setPlanets", data)
    }
  }
})
