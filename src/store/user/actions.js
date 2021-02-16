import { firebaseAuth, firebaseDb } from 'boot/firebase'
import router from 'src/router/index.js'
const debug = require('debug')('[user]:actions')
debug.enabled = true

export const registerUser = async ({ email, password }, payload) => {
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
}
export const logoutUser = async ({ currentUser }, payload) => {
  firebaseAuth.signOut()
  router.replace('/')
}
export const loginUser = async ({ email, password }, payload) => {
  firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      console.log(response)
      router.replace('/home')
    })
    .catch(error => {
      console.log(error.message)
    })
}
export const handleAuthStateChanged = async ({ commit }) => {
  console.log('handleAuth')
  firebaseAuth.onAuthStateChanged(user => {
    if (user) {
      // User is logged in.
      const userId = firebaseAuth.currentUser.uid
      firebaseDb
        .ref('users/' + userId)
        .once('value', snapshot => {
          const currentUser = snapshot.val()
          commit('updateUser', {
            name: currentUser.name,
            email: currentUser.email,
            userId: userId
          })
        })
    } else {
      // User is logged out.
      commit('updateUser', {})
    }
  })
}
