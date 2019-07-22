<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'
import firebaseApp from 'firebase/app'
export default {
  name: 'App',
  PreFetch ({store}) {
    const firebaseConfig = {
      apiKey: 'AIzaSyBCRc1p2xKbU1yRjh2SMRxtfjN8WTg-8bM',
      authDomain: 'gym-management-1.firebaseapp.com',
      databaseURL: 'https://gym-management-1.firebaseio.com',
      projectId: 'gym-management-1',
      storageBucket: 'gym-management-1.appspot.com',
      messagingSenderId: '509490611448',
      appId: '1:509490611448:web:8821a483272b735b'
    }
    firebaseApp.initializeApp(fierbaseConfig)
    const $db = firebase.firestore()
    // Firebase requirement
    $db.settings({
      timestampsInSnapshots: true
    })
    // Put firebase functionality into
    // state for future access
    Object.assign(store.state, {
      $db: firebase.firestore(),
      $firebase: firebaseApp
    })
  }
}
</script>

<style>
</style>
