import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'

import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{title:'Welcome Home!'},
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta:{title:'About Page'},
      component: () => import('./views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title // Set <title> for every components
  NProgress.start()
  NProgress.set(0.5)
  next()
})
router.afterEach(() => {
  setTimeout(() => NProgress.done(), 20)
})

export default router
