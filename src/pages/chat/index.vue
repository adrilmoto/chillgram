<template lang="pug">
q-page.row.column.br
  q-banner().bg-grey-4.text-center
    span User is offline
  span {{messages}}
  div.col.column.justify-end.q-pa-md
    q-chat-message(
      v-for="message in messages"
      :key="message.text"
      :name="message.from"
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
export default {
  name: 'chat',
  data () {
    return {
      newMessage: '',
      messages: [
        {
          text: 'Hey, Jim, how are you?',
          from: 'me'
        },
        {
          text: 'Good thanks, Danny! How are you?',
          from: 'them'
        },
        {
          text: 'Pretty good!',
          from: 'me'
        }
      ]
    }
  },
  methods: {
    sendMessage () {
      if (this.newMessage !== '') {
        console.log('sending')
        this.messages.push({
          text: this.newMessage,
          from: 'me'
        })
        this.newMessage = ''
      } else console.log('notMessage')
    }
  }
}
</script>
