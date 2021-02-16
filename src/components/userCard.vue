<template lang="pug">
  q-card( border style=`position: absolute; right: 1%; top: 100%; maxWidth: 300px;`).row.text-black
    div.row.full-width.q-pa-md
      div(style=`width: 50px; height: 50px; border: 1px solid #000; border-radius: 15px`).row.justify-center.items-center
        span IMG
      .col.q-ml-sm
        .row.full-width
          span.text-h6 {{$store.state.user.currentUser.name}}
        .row.full-width.justify-start.items-center
          div(style=`width: 10px; height: 10px; border-radius: 40px`).bg-green.q-mr-sm
          div(style=`width: 10px; height: 10px; border: 5px solid #787878; border-radius: 40px`).q-mr-sm
          span status
    q-separator.full-width
    div().row.full-width
      q-item(v-ripple clickable dense).row.full-width.items-center
        span Edit profile
      q-item(v-ripple clickable dense).row.full-width.items-center
        span View profile
    q-separator.full-width
    q-item(@click="logoutUser()" v-ripple clickable dense).row.full-width.items-center
      span Sign out from Chillgram
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'userCard',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions('user', ['logoutUser'])
  }
}
</script>
