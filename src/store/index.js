import { createStore } from 'vuex'

export default createStore({
    
    state: {
        collections: []
    },

    mutations: {
        UPDATE_COLLECTIONS( state, payload ) {
            state.collections = payload
        }
    },

    actions: {
        setCollections( context, payload ) {
            context.commit( 'UPDATE_COLLECTIONS', payload )
        }
    },

    getters: {
        collections: function( state ) {
            return state.collections
        }
    }

})