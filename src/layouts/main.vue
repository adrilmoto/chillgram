<template lang="pug">
q-layout(view="hHh lpR fFf").window-height
  q-header()
    c-header
    span {{$store.state}}
  q-drawer(show-if-above v-model="left" side="left" :content-style="{ backgroundColor: '#3f0e40' }" :width="200" bordered).text-accent
    c-menu
  q-page-container
    router-view()
</template>

<script>
import cHeader from 'components/cHeader'
import cMenu from 'components/cMenu'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'main',
  components: { cHeader, cMenu },
  data () {
    return {
      left: ''
    }
  },
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    ...mapActions('user', ['handleAuthStateChanged'])
  },
  mounted () {
    this.handleAuthStateChanged()
  }
}
</script>
