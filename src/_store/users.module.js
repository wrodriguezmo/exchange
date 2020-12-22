export const users = {
    namespaced: true,
    state: {
        all: {}
    },
    actions: {
    },
    mutations: {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, users) {
            state.all = { items: users };
        },
        getAllFailure(state, error) {
            state.all = { error };
        }
    }
}
