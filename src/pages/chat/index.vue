<template lang="pug">
q-layout(view="lHh lpr lFf" :style=`{height: $q.screen.height-40+'px'}` container).bg-wgite.scroll
  q-page-container(:class="{'invisible' : !showMessages}")
    span {{messages}}
    div(id="my-div" :style=`{height: $q.screen.height-178+'px'}`).row.content-end.scroll.q-pa-md
      div(v-for="(message, messageIndex) in messages" :key="message.id").row.full-width
        div(v-if="messages[messageIndex - 1] ? messages[messageIndex-1].author.id === messages.author.id : true").row.full-width
          span.text-bold {{message.author.name}}
        span {{message.text}}
      div(ref="item")
  q-footer(style=`border-top: 1px solid #eee`).bg-white.q-pa-lg
    q-form(style=`border: 1px solid #000; border-radius: 10px;` @submit="sendMessage()")
      div(style=`padding: 10px 0px 0px 10px`)
        q-input(
          borderless
          v-model="newMessage"
          bg-color="white"
          placeholder="Message"
          dense).row.full-width.text-black
      q-separator.full-width
      .row.full-width.justify-end.items-center
        q-btn(
          round
          type="submit"
          dense
          flat
          :color="newMessage ? 'green' : 'accent'"
          icon="send").row
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'chat',
  data () {
    return {
      newMessage: '',
      showMessages: false,
      numbers: 100
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
    ...mapActions('user', ['firebaseSendMessage', 'firebaseStopGetMessages']),
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
    },
    scrollToEnd () {
      const container = document.getElementById('my-div')
      setTimeout(() => {
        container.scrollTop = container.scrollHeight
      }, 20)
      console.log('scroll', container.scrollHeight)
    }
  },
  watch: {
    $route (to, from) {
      this.firebaseStopGetMessages(this.$route.params.otherUserId)
      this.scrollToEnd()
    },
    messages: function (val) {
      if (Object.keys(val).length) {
        this.scrollToEnd()
        setTimeout(() => {
          this.showMessages = true
        }, 500)
      }
    }
  },
  mounted () {
    this.firebaseStopGetMessages(this.$route.params.otherUserId)
  }
}
</script>
