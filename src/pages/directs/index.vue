<template lang="pug">
.row.full-width.justify-center
  q-list(bordered style=`maxWidth: 900px`).row.full-width.br
    q-item(v-for="user in users" :key="user.id" to="/chat" class="q-my-sm" clickable v-ripple).row.full-width
      q-item-section(avatar)
        q-avatar(color="primary" text-color="white")
          span {{ user.name.charAt(0) }}
      q-item-section.row.full-width
        q-item-label {{ user.name }}
      q-item-section(side)
        q-badge(:color="user.online ? 'light-green-5' : 'grey-4'") {{ user.online ? 'Online' : 'Offline' }}
</template>
<script>
export default {
  name: 'directs',
  data () {
    return {
      users: [
        {
          id: 1,
          name: 'Jim',
          online: ''
        },
        {
          id: 2,
          name: 'Roy',
          online: ''
        },
        {
          id: 3,
          name: 'Bob',
          online: ''
        }
      ]
    }
  }
}
</script>
