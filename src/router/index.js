import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Dashboard2 from '../views/Dashboard2.vue'
import Workspace from '../views/Workspace.vue'
import Register from '../views/Register.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
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
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/workspace',
    name: 'workspace',
    component: Workspace
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
