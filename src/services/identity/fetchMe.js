import Vue from 'vue'
import store from '@/store'

export default () => {
  Vue.$http.get('/v1.1/Account/Me').then((response) => {
    store.dispatch('auth/login')
    store.dispatch('identity/getMeInfo', response.data)
  }).catch(() => {
    store.dispatch('auth/logout')
  })
}
