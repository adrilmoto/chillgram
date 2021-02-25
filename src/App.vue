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
::-webkit-scrollbar
  width: 6px
  height: 0px !important
::-webkit-scrollbar-thumb
  background: #252837
  border-radius: 5px
  broder: 4px solid black
.br
  border: 1px solid red
</style>
