export default {
  name: 'home-page',
  computed: {
    userProfile() {
      return this.$store.state.identity.userProfile
    }
  }
}
