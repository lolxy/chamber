/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import {
  CHECK,
  LOGIN,
  LOGOUT
} from './mutation-types'

export default {
  [CHECK](state) {
    state.authenticated = !!localStorage.getItem('authenticated')
  },

  [LOGIN](state, token) {
    state.authenticated = true
    localStorage.setItem('authenticated', true)
  },

  [LOGOUT](state) {
    state.authenticated = false
    localStorage.removeItem('authenticated')
  }
}
