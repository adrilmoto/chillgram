import { firebaseAuth, firebaseDb } from 'boot/firebase'
const state = {
  user: {}
}
const mutations = {
  setUserDetails (state, payload) {
    state.user = payload
  }
}
const actions = {
  registerUser ({ email, password }, payload) {
    console.log('payload', payload)
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log(response)
        const userId = firebaseAuth.currentUser.uid
        firebaseDb
          .ref('users/' + userId)
          .set({
            name: payload.name,
            email: payload.email,
            online: true
          })
      })
      .catch(error => {
        console.log(error.message)
      })
  },
  loginUser ({ email, password }, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log(response)
        this.$router.replace({ name: '/home' })
      })
      .catch(error => {
        console.log(error.message)
      })
  },
  handleAuthStateChanged ({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        // User is logged in.
        const userId = firebaseAuth.currentUser.uid
        firebaseDb
          .ref('users/' + userId)
          .once('value', snapshot => {
            const userDetails = snapshot.val()
            commit('setUserDetails', {
              name: userDetails.name,
              email: userDetails.email,
              userId: userId
            })
          })
      } else {
        // User is logged out.
        commit('setUserDetails', {})
      }
    })
  }
}
const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
