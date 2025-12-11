import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Profile from '@/pages/Profile.vue'
import Leaderboard from '@/pages/Leaderboard.vue'
import Contact from '@/pages/Contact.vue'
import Kuis from '@/pages/Kuis.vue'
import Hasil from '@/pages/Hasil.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/about', name: 'About', component: About },
  { path: '/leaderboard', name: 'Leaderboard', component: Leaderboard },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/kuis', name: 'Kuis', component: Kuis },
  { path: '/hasil', name: 'Hasil', component: Hasil },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
