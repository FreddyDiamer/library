import { createRouter, createWebHistory } from "vue-router"
import Auth from '@/pages/Auth.vue'

const routes = [
  {
    path: "/hello",
    component: Auth,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router