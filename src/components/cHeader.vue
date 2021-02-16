<template lang="pug">
div(style=`background-color: #350d36`).row.full-width.justify-center.items-center
  div(style=`maxWidth: `).row.full-width.justify-between.items-center.q-px-md.q-py-xs.q-pb-xs
    div.row
    q-icon(name="access_time" size="sm" color="grey")
    div(@click="openUser()").cursor-pointer
      q-tooltip(content-style="font-size: 15px; font-weight: 600;" :offset="[10, 10]").bg-primary
        span {{$store.state.user.currentUser.name}}
      div(style=`width: 30px; height: 30px; border-radius: 6px; background-color: #fff`).row.justify-center.items-center
        span.text-black img
      div(style=`position: absolute; right: 0.5%; border: 3px solid #350d36; margin: -11px 0 0 0; width: 15px; height: 15px; border-radius: 40px`).bg-green.q-mr-sm
      //- User information
    user-card(v-if="openedUser")
</template>
<script>
import userCard from 'components/userCard.vue'
export default {
  name: 'cHeader',
  components: { userCard },
  data () {
    return {
      openedUser: false
    }
  },
  methods: {
    openUser () {
      this.openedUser = !this.openedUser
    }
  }
}
</script>
