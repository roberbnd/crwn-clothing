import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBHSBqaM7lZf_j--2ZpYxdG2rfS6M0vRP4",
    authDomain: "crwn-db-acca4.firebaseapp.com",
    databaseURL: "https://crwn-db-acca4.firebaseio.com",
    projectId: "crwn-db-acca4",
    storageBucket: "crwn-db-acca4.appspot.com",
    messagingSenderId: "1082679308298",
    appId: "1:1082679308298:web:4b9a004c45f650f163eff3",
    measurementId: "G-KKWMZ2KLQM"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)
