<template lang="pug">
div(style=`minHeight: 40px; background-color: #350d36`).row.full-width.justify-center.items-center
  div.row.full-width.justify-between.items-center.q-px-md.q-py-xs.q-pb-xs
    div.row
    q-icon(name="access_time" size="sm" color="grey")
    div(@click="openUser()").cursor-pointer
      q-tooltip(content-style="font-size: 15px; font-weight: 600;" :offset="[10, 10]").bg-primary
        span {{user.name}}
      div(style=`width: 30px; height: 30px; border-radius: 6px; background-color: #fff`).row.justify-center.items-center
        span.text-black img
      div(style=`position: absolute; right: 0.5%; border: 3px solid #350d36; margin: -11px 0 0 0; width: 15px; height: 15px; border-radius: 40px` :class="[user.online ? 'bg-grey-5' : 'bg-light-green-5']").q-mr-sm
      //- User information :class="[user.online ? 'light-green-5' : 'grey-4']"
    user-card(v-if="openedUser")
</template>
<script>
import userCard from './userCard.vue'
export default {
  name: 'cHeader',
  components: { userCard },
  data () {
    return {
      openedUser: false
    }
  },
  computed: {
    user () {
      return this.$store.state.user.userDetails
    }
  },
  methods: {
    openUser () {
      this.openedUser = !this.openedUser
    }
  }
}
</script>
