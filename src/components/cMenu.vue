<template lang="pug">
//- WRAPPER
div(style=`maxWidth: 200px;`).row.full-width
  //- HEADER
  .row.full-width.justify-center.items-center
    div(style=`height: 60px; border-bottom: 1px solid #431e44; border-top: 1px solid #431e44`).row.full-width.justify-start.items-center.text-white.q-px-md.q-mb-md
      span.text-bold Название
  //- START MENU
  div(v-for="(title, titleIndex) in menuTitles" :key="title.id"
    style=`height: 30px;`
    @click="$router.push(title.route)"
    ).row.full-width.justify-start.items-center.cursor-pointer
      q-icon(:name="title.icon" size="sm").q-mr-sm
      span {{title.name}}
  //- CHANNELS wrapper
  .row.full-width.justify-start.items-center
    //- CHANNELS open button
    div(@click="viewChannels()").row.full-width.items-center.q-my-sm.cursor-pointer
      q-icon(color="accent" size="sm" :name="viewArrowChannels").q-mr-sm
      span Channels
    //- CHANNELS all
    div(v-if="openedChannels").row.full-width.q-pl-md
      div(v-for="(channel,channelIndex) in channels" :key="channel.id"
        style=`height: 40px;`
        @click="$router.push(channel.route)"
        ).row.full-width.justify-start.items-center.cursor-pointer
        q-icon(:name="channel.icon" size="sm").q-mr-sm
        span {{channel.name}}
      //- CHANNELS add
      q-btn(padding="none" color="secondary" text-color="accent" icon="add").q-mr-sm
      span Add channels
  //- DIRECTS wrapper
  .row.full-width.justify-start.items-center
    //- DIRECTS open button
    div(@click="viewDirect()").row.full-width.items-center.q-my-sm.q-mt-md.cursor-pointer
      q-icon(color="accent" size="sm" :name="viewArrowDirects").q-mr-sm
      span Direct messages
    //- DIRECTS all
    div(v-if="openedDirects").row.full-width.q-pl-md
      div(v-for="(direct,directIndex) in directs" :key="directs.id"
        style=`height: 40px;`
        @click="$router.push(directs.route)"
        ).row.full-width.justify-start.items-center.cursor-pointer
        q-icon(:name="direct.icon" size="sm").q-mr-sm
        span {{direct.name}}
</template>
<script>
export default {
  name: 'cMenu',
  data () {
    return {
      openedChannels: true,
      openedDirects: true,
      openedChannelsArrow: true,
      openedDirectsArrow: true,
      menuTitles: [
        { name: 'Threads', id: 'threads', route: '/threads', icon: 'chat' },
        { name: 'All DMs', id: 'dms', route: '/dms', icon: 'forum' },
        { name: 'Mentions & reactions', id: 'mentions', route: '/mentions', icon: 'alternate_email' },
        { name: 'Saved items', id: 'items', route: '/items', icon: 'bookmark' },
        { name: 'More', id: 'more', route: '/more', icon: 'more_vert' }
      ],
      channels: [
        { name: 'general', id: 'general', route: '/general', icon: 'tag' }
      ],
      directs: [
        { name: 'dev', id: 'dev', route: '/dev', icon: 'lock' }
      ]
    }
  },
  computed: {
    viewArrowChannels () {
      if (this.openedChannelsArrow === false) return 'arrow_right'
      else return 'arrow_drop_down'
    },
    viewArrowDirects () {
      if (this.openedDirectsArrow === false) return 'arrow_right'
      else return 'arrow_drop_down'
    }
  },
  methods: {
    viewChannels () {
      this.openedChannels = !this.openedChannels
      this.openedChannelsArrow = !this.openedChannelsArrow
    },
    viewDirect () {
      this.openedDirects = !this.openedDirects
      this.openedDirectsArrow = !this.openedDirectsArrow
    }
  }
}
</script>
