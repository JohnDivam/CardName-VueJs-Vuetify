import { createStore } from "vuex";

export default createStore({
    state : {
        user: false,
        userPermission: null
    },
    getters: {        
        getUser(state){
            return state.user
        },
    },

    mutations: {
        setUpdateUser(state, data){
            state.user = data
        },

    },
    actions :{
        changeCounterAction({commit}, data){
            commit('changeTheCounter', data)
        }
    }


})