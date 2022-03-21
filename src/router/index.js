import Vue from 'vue'
import VueRouter from 'vue-router'
import indexViews from "../views/indexViews";
import ErrorView from "../views/ErrorView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: indexViews
  },
  {
    path: '*',
    name: 'error',
    component: ErrorView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
