import * as types from './mutation-types'

const actions = {
  enrollSubmitted ({commit}) {
    commit(types.ENROLL_SUBMIT)
  },
  enrollSuccess ({commit}) {
    commit(types.ENROLL_SUCCESS)
  }
}

export default actions
