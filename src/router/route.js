import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home.vue'
import About from '@/pages/about.vue'
import Leaderboard from '@/pages/leaderboard.vue'
import Contact from '@/pages/contact.vue'
import Kuis from '@/pages/kuis.vue'
import Hasil from '@/pages/hasil.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/leaderboard', name: 'Leaderboard', component: Leaderboard },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/kuis', name: 'Kuis', component: Kuis },
  { path: '/hasil', name: 'Hasil', component: Hasil },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
