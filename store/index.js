import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const createStore = () => {
  return new Vuex.Store({
    state: {
      isLoading: false
    },
    mutations,
    actions,
    getters
  })
}

export default createStore
