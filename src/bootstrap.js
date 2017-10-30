/* ============
 * Bootstrap File
 * ============
 *
 * Will configure and bootstrap the application.
 */

import Vue from 'vue'
import Axios from 'axios'
// import authService from '@/services/auth'
import VuexRouterSync from 'vuex-router-sync'
import store from './store'
import VueRouter from 'vue-router'
import routes from './routes'
import Meta from 'vue-meta'

import VueTimeago from 'vue-timeago'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// 自定义全局组件
import defaultLayout from '@/layouts/default.vue'
Vue.component('default-layout', defaultLayout)

/* ============
 * Vue
 * ============
 *
 * Vue.js is a library for building interactive web interfaces.
 * It provides data-reactive components with a simple and flexible API.
 *
 * http://rc.vuejs.org/guide/
 */
Vue.config.debug = process.env.NODE_ENV !== 'production'

/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */

Axios.defaults.baseURL = process.env.apiRoot
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.withCredentials = true

// Axios.interceptors.response.use(
//   response => response,
//   (error) => {
//     if (error.response.status === 401) {
//       authService.logout()
//     }
//   })

Vue.$http = Axios
Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return Axios
  }
})

/* ============
 * Vuex Router Sync
 * ============
 *
 * Effortlessly keep vue-Router and vuex store in sync.
 *
 * https://github.com/vuejs/vuex-router-sync/blob/master/README.md
 */

store.dispatch('auth/check')

/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth) && !store.state.auth.authenticated) {
    /*
     * If the user is not authenticated and visits
     * a page that requires authentication, redirect to the login page
     */
    next({
      name: 'home'
    })
  } else if (to.matched.some(m => !m.meta.auth) && store.state.auth.authenticated) {
    /*
     * If the user is authenticated and visits
     * an guest page, redirect to the dashboard page
     */
    next()
  } else {
    next()
  }
})
VuexRouterSync.sync(store, router)

Vue.router = router

/* ============
 * ElementUI
 * ============
 *
 * http://element.eleme.io/
 */

Vue.use(ElementUI)

/* ============
 * Vue Meta
 * ============
 *
 * https://github.com/declandewet/vue-meta
 */

Vue.use(Meta)

/* ============
 * Vuex Timeago
 * ============
 *
 * https://github.com/egoist/vue-timeago
 */

Vue.use(VueTimeago, {
  name: 'timeago',
  locale: 'zh-CN',
  locales: {
    'zh-CN': require('vue-timeago/locales/zh-CN.json')
  }
})

/* ============
 * Styling
 * ============
 */
require('normalize.css')
require('./assets/scss/main.scss')
require('swiper/dist/css/swiper.css')

export default {
  router
}
