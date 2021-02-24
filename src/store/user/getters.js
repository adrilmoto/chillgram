// import { firebaseAuth, firebaseDb } from 'boot/firebase'
export function usersList (state) {
  const usersFiltered = {}
  Object.keys(state.users).forEach(key => {
    if (key !== state.userDetails.userId) {
      usersFiltered[key] = state.users[key]
    }
  })
  return usersFiltered
}
