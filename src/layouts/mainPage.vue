<template lang="pug">
.row.window-width.window-height.justify-center.items-center.content-center
  q-layout(v-if="!loading" view="hHh lpR fFf").window-height
    q-header()
      c-header
      //- span(style=`position: absolute`) {{$store.state.user.users}}
    q-drawer(show-if-above v-model="left" side="left" :content-style="{ backgroundColor: '#3f0e40' }" :width="200" bordered).text-accent
      c-menu
    q-page-container
      router-view
  q-spinner-bars(v-if="loading" size="lg" color="purple")
</template>

<script>
import cHeader from 'components/cheader/cHeader'
import cMenu from 'components/cmenu/cMenu'
export default {
  name: 'mainPage',
  components: { cHeader, cMenu },
  data () {
    return {
      left: '',
      loading: true
    }
  },
  computed: {
  },
  methods: {
  },
  async mounted () {
    console.log('mounted')
  },
  async created () {
    await this.$store.dispatch('user/init')
    this.loading = false
  }
}
</script>
