<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  /* ============
   * Entry Point
   * ============
   *
   * The entry point of the application
   */

  import store from './store'
  import { router } from './bootstrap'

  import init from '@/services/init'

  export default {
    store,
    router,
    mounted() {
      init()
    }
  }
</script>
