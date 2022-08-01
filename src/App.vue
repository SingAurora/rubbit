<template>
  <nav>
    {{ $store.state.moduleA.userName }}<br/>
    {{ $store.getters['moduleB/updateName']}}<br/>
    <button @click="Fn">FN</button>
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
