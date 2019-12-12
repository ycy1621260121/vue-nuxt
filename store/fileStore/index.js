import * as types  from './mutationType'
import * as actions from './actions'

const state = ()=> ({
    data: {},
})

const mutations = {
    /*[types.HOT] (state, result) {
        state.data = result.data
    },*/
    setHotData(state, result) {
        state.data = result.data
    },
    getRedData(state,result){
      state.data = result.data;
    }
}
export default {
    actions, state, mutations
}
