<template lang="pug">
q-page.row.column
  q-banner(v-if="!otherUsers.online").bg-grey-4.text-center
    span {{otherUsers.name}} is offline
  span {{otherUsers}}
  div.col.column.justify-end.q-pa-md
    q-chat-message(
      v-for="message in messages"
      :key="message.text"
      :name="message.from == 'me' ? userDetails.name : otherUsers.name"
      :text="[message.text]"
      :sent="message.from == 'me' ? true : false")
  q-footer(elavated="true")
    q-toolbar
      q-form(@submit="sendMessage()").row.full-width
        q-input(outline
          rounded
          v-model="newMessage"
          bg-color="white"
          label="Message"
          dense).row
        q-btn(
          round
          type="submit"
          dense
          flat
          color="white"
          icon="send").row
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'chat',
  data () {
    return {
      newMessage: ''
    }
  },
  computed: {
    ...mapState('user', ['messages', 'userDetails']),
    otherUsers () {
      if (this.$store.state.user.users[this.$route.params.otherUserId]) {
        return this.$store.state.user.users[this.$route.params.otherUserId]
      } else return {}
    }
  },
  methods: {
    ...mapActions('user', ['firebaseStopGetMessages', 'firebaseSendMessage']),
    sendMessage () {
      if (this.newMessage !== '') {
        console.log('sending')
        this.firebaseSendMessage({
          message: {
            text: this.newMessage,
            from: 'me'
          },
          otherUserId: this.$route.params.otherUserId
        })
        this.newMessage = ''
      } else console.log('notMessage')
    }
  },
  watch: {
    $route (to, from) {
      this.firebaseStopGetMessages(this.$route.params.otherUserId)
    }
  },
  created () {
    this.firebaseStopGetMessages(this.$route.params.otherUserId)
  }
}
</script>
