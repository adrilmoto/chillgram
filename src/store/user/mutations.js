import Vue from 'vue'
// AUTH
export function setUserDetails (state, payload) {
  state.userDetails = payload
}
export function updateUser (state, payload) {
  Object.assign(state.users[payload.userId], payload.userDetails)
}
// USERS
export function addUser (state, payload) {
  // console.log(payload)
  Vue.set(state.users, payload.userId, payload.userDetails)
}
// CHATS
export function addMessages (state, payload) {
  Vue.set(state.messages, payload.messageId, payload.messageDetails)
}
export function clearMessages (state) {
  state.messages = {}
}
