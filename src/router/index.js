import { createRouter, createWebHistory } from "vue-router"
import Auth from '@/pages/Auth.vue'
import Books from '@/pages/Books.vue'

const routes = [
  {
    path: "/books",
    component: Books,
  },
  {
    path: "/login",
    component: Auth,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router