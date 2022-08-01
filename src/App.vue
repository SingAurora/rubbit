<template>
  <nav>
    {{ $store.state.user.profile.account }}<br/>
    <button @click="$store.commit('user/setUser', {account: 'bb'})">FN</button>
  </nav>
  <router-view/>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    console.log(store.getters.newName)
    const Fn = () => {
      store.commit('moduleB/updateName')
    }
    return { Fn }
  }
}
</script>

<style lang="less">
</style>
