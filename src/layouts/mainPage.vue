<template lang="pug">
q-layout(v-if="$store.state" view="hHh lpR fFf").window-height
  q-header()
    c-header
    span {{$store.state.user.userDetails}}
  q-drawer(show-if-above v-model="left" side="left" :content-style="{ backgroundColor: '#3f0e40' }" :width="200" bordered).text-accent
    c-menu
  q-page-container
    router-view
</template>

<script>
import cHeader from 'components/cheader/cHeader'
import cMenu from 'components/cmenu/cMenu'
export default {
  name: 'mainPage',
  components: { cHeader, cMenu },
  data () {
    return {
      left: ''
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>
