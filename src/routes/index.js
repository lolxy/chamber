/**
 * The routes
 *
 */

const Error404 = r => require.ensure([], () => r(require('@/pages/error/404.vue')), 'error-404')

const HomePage = r => require.ensure([], () => r(require('@/pages/index/index.vue')), 'home-page')

export default [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      guest: true
    }
  },
  {
    path: '/404',
    name: 'page-no-found',
    component: Error404,
    meta: {
      guest: true
    }
  },
  {
    path: '/*',
    redirect: '/404'
  }
]
