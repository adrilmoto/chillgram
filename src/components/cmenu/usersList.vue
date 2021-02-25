<template lang="pug">
.row.full-width
  span.text-h6 Users
  q-item(v-for="(user, userId) in users" :key="userId.id"
  v-ripple:blue dense no-padding clickable
  active-class="bg-blue-9 text-white"
  @click="openChat(userId)"
  style="padding: 0"
  ).row.full-width.justify-start.items-center.cursor-pointer.q-pl-sm
    div(style=`width: 10px; height: 10px; border-radius: 40px` :class="[user.online ? 'bg-green' : 'bg-grey-5']").q-mr-sm
    span {{ userId }}
</template>
<script>
// import { mapActions } from 'vuex'
export default {
  name: 'usersList',
  props: ['users'],
  computed: {
    usersId () {
      const idList = Object.keys(this.users)
      return idList
    }
  },
  methods: {
    // ...mapActions('user', ['firebaseGetMessages']),
    openChat (id) {
      this.$router.push('/chat/' + id).catch(() => {})
      // this.firebaseGetMessages(id)
    }
  }
}
</script>
