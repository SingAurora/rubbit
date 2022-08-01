import { createStore } from 'vuex'

const moduleA = {
  state: {
    userName: 'zs'
  },
  getters: {
    updateName (state: { userName: string }) {
      return state.userName + '!!!!'
    }
  },
  mutations: {
    updateName (state: { userName: string }) {
      state.userName = 'moduleA !!!!!!'
    }
  }
}
const moduleB = {
  namespaced: true,
  state: {
    userName: 'zs'
  },
  getters: {
    updateName (state: { userName: string }) {
      return state.userName + '!!!!'
    }
  },
  mutations: {
    updateName (state: { userName: string }) {
      state.userName = 'moduleA !!!!!!'
    }
  }
}

export default createStore({
  modules: {
    moduleA,
    moduleB
  }
})
