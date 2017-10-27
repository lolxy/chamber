/* ============
 * Mutations for the identity module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import {
  GET_ME_INFO
} from './mutation-types'

export default {
  [GET_ME_INFO](state, data) {
    state.userProfile = data
  }
}
