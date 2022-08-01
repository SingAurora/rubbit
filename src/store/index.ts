import { createStore } from 'vuex'
import cart from './modules/cart.ts'
import category from './modules/category.ts'
import user from './modules/user.ts'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  modules: {
    cart,
    category,
    user
  },
  plugins: [
    createPersistedState({
      key: 'erabbit-client-pc-124-store',
      paths: ['user', 'cart']
    })
  ]
})
