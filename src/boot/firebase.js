// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
// import store from 'src/store'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBsYDshGvTWYs5qW9Gsz9mwLNzsl29kNyw',
  authDomain: 'chillgram-fb3cf.firebaseapp.com',
  databaseURL: 'https://chillgram-fb3cf-default-rtdb.firebaseio.com/',
  projectId: 'chillgram-fb3cf',
  storageBucket: 'chillgram-fb3cf.appspot.com',
  messagingSenderId: '1012066642871',
  appId: '1:1012066642871:web:04b1aab26354091dbc1632'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth()
const firebaseDb = firebaseApp.database()
// const usersRef = firebaseDb.ref('users')
// const firebase.auth().onAuthstateChanged(user => {
//   store.commit('updateUser', user)
// })
export { firebaseAuth, firebaseDb }
