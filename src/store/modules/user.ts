export default {
  namespaced: true,
  state () {
    return {
      profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: 'aa',
        mobile: '',
        token: ''
      }
    }
  },
  mutations: {
    setUser (state: { profile: unknown }, payload: unknown) {
      state.profile = payload
    }
  }
}
