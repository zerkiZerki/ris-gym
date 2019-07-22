import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyBCRc1p2xKbU1yRjh2SMRxtfjN8WTg-8bM',
  authDomain: 'gym-management-1.firebaseapp.com',
  databaseURL: 'https://gym-management-1.firebaseio.com',
  projectId: 'gym-management-1',
  storageBucket: 'gym-management-1.appspot.com',
  messagingSenderId: '509490611448',
  appId: '1:509490611448:web:8821a483272b735b'
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export { db }