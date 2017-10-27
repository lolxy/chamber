<template>
  <div class="wrapper">
    <page-header></page-header>
    <div class="page-main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import pageHeader from '@/components/header/main.vue'

export default {
  components: {
    pageHeader
  }
}
</script>
