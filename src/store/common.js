export default {
    name: 'common',
    namespaced: true,
    state: {
        userInfo: {},
    },
    mutations: {
        setUserInfo(state, payload) {
            state.userInfo = payload;
        }
    }
}