<template lang="pug">
div(style=`maxWidth: 400px`).row
  span {{$store.state}}
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
    // ...mapGetters(['user']),
  },
  watch: {
    // user: function (changedUser) {
    //   if (changedUser) {
    //     this.$router.replace(this.nextRoute)
    //   }
    // }
  },
  mounted () {
    this.handleAuthStateChanged()
  },
  methods: {
    ...mapActions('user', ['registerUser', 'loginUser', 'handleAuthStateChanged']),
    submitForm () {
      if (this.tab === 'Login') {
        this.loginUser(this.formData)
      } else {
        this.registerUser(this.formData)
      }
    }
  }
}
</script>
