import * as types from './mutation-types'

const mutations = {
  [types.ENROLL_SUBMIT] (state) {
    state.isLoading = true
  },
  [types.ENROLL_SUCCESS] (state) {
    state.isLoading = false
  }
}

export default mutations
