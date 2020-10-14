
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from "@/views/Category.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/category/:alias',
    name: 'Category',
    component: Category
  },
  {
    path: '/pages/:category/:page',
    name: "Page",
    component: () => import("@/components/Page.vue")
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/components/Login.vue")
  },
  {
    path: '/signup',
    name: 'Singup',
    component: () => import("@/components/Signup.vue")
  },
  {
    path: '/page-create',
    name: 'PageCreate',
    component: () => import("@/components/PageCreate.vue")
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
