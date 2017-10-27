/* ============
 * Actions for the identity module
 * ============
 *
 * The actions that are available on the
 * identity module.
 */

import * as types from './mutation-types'

export const getMeInfo = ({ commit }, payload) => {
  commit(types.GET_ME_INFO, payload)
}

export default {
  getMeInfo
}
