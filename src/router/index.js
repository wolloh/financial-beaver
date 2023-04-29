import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/btn',
    name: 'btn',
    component: () => import(/* webpackChunkName: "btn" */ '../views/HomeView.vue')
  },
  {
    path: '/banks',
    name: 'banks',
    component: () => import(/* webpackChunkName: "btn" */ '../views/BanksView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "btn" */ '../views/SearcherView.vue')
  },
  {
    path: '/golden-ring',
    name: 'golden-ring',
    component: () => import(/* webpackChunkName: "golden-ring" */ '../views/GoldenRingBankPage/GoldenRingPage.vue')
  },
  {
    path: '/sper-page',
    name: 'sper-page',
    component: () => import(/* webpackChunkName: "SperPage" */ '../views/Sper/SperPage.vue')
  },
  {
    path: '/result',
    name: 'result',
    component: () => import(/* webpackChunkName: "ResultPage" */ '../views/Result/ResultPage.vue')
  },
  {
    path: '/info-search',
    name: 'info-search',
    component: () => import(/* webpackChunkName: "InfoSearchPage" */ '../views/InformationPage/LicenseSearchPage.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import(/* webpackChunkName: "InfoPage" */ '../views/InformationPage/LicenseCheckPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
