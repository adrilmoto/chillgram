import { firebaseDb, firebaseAuth } from 'boot/firebase'

export const registerUser = async (_, payload) => {
  firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      console.log(response)
      const userId = firebaseAuth.currentUser.uid
      firebaseDb
        .ref('users/' + userId)
        .set({
          name: payload.name,
          email: payload.email,
          online: false
        })
    })
    .catch(error => {
      console.log(error.message)
    })
}
export function loginUser (_, payload) {
  firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      console.log(response)
      this.$router.push('/')
    })
    .catch(error => {
      console.log(error.message)
    })
}
export function logoutUser (_, payload) {
  firebaseAuth.signOut()
    .then(() => {
      this.$router.replace('/login')
    })
}
export function firebaseUpdateUser (_, payload) {
  if (payload.userId) {
    firebaseDb.ref('users/' + payload.userId).update(payload.updates)
  }
}
export function handleAuthStateChanged ({ commit, dispatch, state }) {
  firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      // user logged
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
      dispatch('firebaseUpdateUser', {
        userId: userId,
        updates: {
          online: true
        }
      })
      dispatch('firebaseGetUsers')
    } else {
      // user logout
      dispatch('firebaseUpdateUser', {
        userId: state.userDetails.userId,
        updates: {
          online: false
        }
      })
      commit('setUserDetails', {})
    }
  })
}
// USERS

export function firebaseGetUsers ({ commit }) {
  firebaseDb.ref('users').on('child_added', snapshot => {
    const userDetails = snapshot.val()
    const userId = snapshot.key
    commit('addUser', {
      userId,
      userDetails
    })
  })
  firebaseDb.ref('users').on('child_changed', snapshot => {
    const userDetails = snapshot.val()
    const userId = snapshot.key
    commit('updateUser', {
      userId,
      userDetails
    })
  })
}

// CHATS
export function firebaseSendMessage ({ state }, payload) {
  firebaseDb.ref('chats/' + state.userDetails.userId + '/' + payload.otherUserId).push(payload.message)
  payload.message.from = 'them'
  firebaseDb.ref('chats/' + payload.otherUserId + '/' + state.userDetails.userId).push(payload.message)
  console.log(payload)
}

export const firebaseStopGetMessages = ({ state, commit }, otherUserId) => {
  const userId = state.userDetails.userId
  const messagesRef = firebaseDb.ref('chats/' + userId + '/' + otherUserId)
  messagesRef.off('child_added')
  commit('clearMessages')
  messagesRef.on('child_added', snapshot => {
    const messageDetails = snapshot.val()
    const messageId = snapshot.key
    commit('addMessages', {
      messageId,
      messageDetails
    })
  })
}
export function firabaseStopGettingMessages ({ state, commit }, otherUserId) {
  const userId = state.userDetails.userId
  const messagesRef = firebaseDb.ref('chats/' + userId + '/' + otherUserId)
  messagesRef.off('child_added')
  commit('clearMessages')
}
