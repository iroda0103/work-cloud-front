import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Dashboard2 from '../views/Dashboard2.vue'
import Workspace from '../views/Workspace.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
   {
    path: '/dashboard2',
    name: 'dashboard2',
    component: Dashboard2
  },
  {
    path: '/workspace',
    name: 'workspace',
    component: Workspace
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
