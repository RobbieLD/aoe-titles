import { createRouter, createWebHistory } from 'vue-router'
import TitlesView from '../views/TitlesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'titles',
      component: TitlesView
    },
  ]
})

export default router
