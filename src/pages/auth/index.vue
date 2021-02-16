<template lang="pug">
.row.window-height.justify-center.items-center
  q-card
    q-tabs(
      v-model="tab"
      dense
      no-caps
      no-border
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator)
      q-tab(name="Login" label="Login")
      q-tab(name="Register" label="Register")
    q-separator
    q-tab-panels(v-model="tab" animated)
      q-tab-panel(name="Login")
        login-register(:tab="tab")
      q-tab-panel(name="Register")
        login-register(:tab="tab")
    .row.q-px-md.q-mb-md
      .row.full-width.items-center.q-mb-lg
        div(style=`border-top: 1px solid #333; height: 0px`).col
        span.q-mx-md OR
        div(style=`border-top: 1px solid #333; height: 0px`).col
      .row.full-width
        q-btn(no-caps bordered style="background-color: #333; color: white").col Github
        .q-px-xs
        q-btn(no-caps bordered).col Google
</template>
<script>
export default {
  name: 'auth',
  components: {
    'login-register': require('components/loginRegister.vue')
      .default
  },
  data () {
    return {
      tab: 'Login',
      username: '',
      password: ''
    }
  }
}
</script>
