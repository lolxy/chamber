import topModule from '@/components/topmodule/main.vue'
export default {
  name: 'home-page',
  computed: {
    userProfile() {
      return this.$store.state.identity.userProfile
    }
  },
  components: {
    topModule
  }
}
