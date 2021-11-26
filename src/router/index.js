import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Recents from '@/views/Recents.vue'
import Favorites from '@/views/Favorites.vue'
import Nearby from '@/views/Nearby.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recents',
    name: 'Recents',
    component: Recents
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/nearby',
    name: 'Nearby',
    component: Nearby
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
