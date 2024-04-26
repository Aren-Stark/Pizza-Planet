import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/AboutView.vue'
import Admin from '../views/AdminView.vue'
import Home from '../views/HomeView.vue'
import Menu from '../views/MenuView.vue'
import Delivery from '../components/Delivery.vue'
import History from '../components/History.vue'
import Locations from '../components/Locations.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'aboutLink',
      component: About,
      children: [
        {
          path: 'delivery',
          name: 'deliveryLink',
          component: Delivery
        },
        {
          path: 'history',
          name: 'historyLink',
          component: History
        },
        {
          path: 'locations',
          name: 'locationsLink',
          component: Locations
        },
      ]
    },
    {
      path: '/admin',
      name: 'adminLink',
      component: Admin
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/menu',
      name: 'menuLink',
      component: Menu
    }
  ]
})

export default router
