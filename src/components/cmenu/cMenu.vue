<template lang="pug">
//- WRAPPER
div(style=`maxWidth: 200px;`).row.full-width.q-px-sm
  //- HEADER
  .row.full-width.justify-center.items-center
    div(style=`height: 60px; border-bottom: 1px solid #431e44; border-top: 1px solid #431e44` @click="home()").row.full-width.justify-start.items-center.text-white.q-mb-md
      span.text-bold Chillgram
  .row.full-width
    span.text-h6 Channels
  .row.full-width
    users-list(:users="usersList")
</template>
<script>
import usersList from './usersList'
import { mapGetters } from 'vuex'
export default {
  name: 'cMenu',
  components: { usersList },
  data () {
    return {
      openedChannels: false,
      openedChannelsArrow: false,
      channels: [
        { name: 'general', id: 'general', route: '/general', icon: 'tag' }
      ],
      directs: [
        { name: 'dev', id: 'dev', route: '/dev', icon: 'lock' }
      ]
    }
  },
  computed: {
    ...mapGetters('user', ['usersList']),
    viewArrowChannels () {
      if (this.openedChannelsArrow === false) return 'arrow_left'
      else return 'arrow_drop_down'
    }
  },
  methods: {
    home () {
      this.$router.push('/')
    },
    viewChannels () {
      this.openedChannels = !this.openedChannels
      this.openedChannelsArrow = !this.openedChannelsArrow
    }
  }
}
</script>
