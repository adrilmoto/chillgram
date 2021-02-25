<template lang="pug">
div(style=`maxWidth: 400px`).row
  span {{$store.state.user.userDetails}}
  .row.full-width.justify-center.text-bold.text-h5.q-mb-md
    span {{tab}} to Chillgram
  q-form(@submit="submitForm").row.full-width.justify-center.q-py-sm
    q-input(outlined v-if="tab == 'Register'" v-model="formData.name" label="Username").full-width.q-mb-sm
    q-input(outlined v-model="formData.email" label="Email").full-width.q-mb-sm
    q-input(outlined v-model="formData.password" label="Password").full-width.q-mb-sm
    q-btn(no-caps type="submit" style="height: 50px; color: white" :label="tab").full-width.justify-center.bg-secondary
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'loginRegister',
  props: ['tab'],
  data () {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  computed: {
    nextRoute () {
      return this.$route.query.redirect || '/'
    }
  },
  watch: {
  },
  methods: {
    ...mapActions('user', ['registerUser', 'loginUser']),
    async submitForm () {
      if (this.tab === 'Login') {
        try {
          await this.$store.dispatch('user/loginUser', this.formData)
        } catch (error) {
          console.log('login error', error)
        }
      } else {
        this.registerUser(this.formData)
      }
    }
  }
}
</script>
