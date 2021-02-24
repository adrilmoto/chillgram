<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions('user', ['handleAuthStateChanged'])
  },
  mounted () {
    this.handleAuthStateChanged()
  }
}
</script>

<style lang="sass">
.br
  border: 1px solid red
</style>
