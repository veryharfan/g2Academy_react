import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyAlie9TE5tl4VoCQZbQ8Mde7Wcg6uTq8Mo',
  authDomain: 'simple-ecommerce-b7a70.firebaseapp.com',
  projectId: 'simple-ecommerce-b7a70',
  storageBucket: 'simple-ecommerce-b7a70.appspot.com',
  messagingSenderId: '751820533857',
  appId: '1:751820533857:web:e5b20d16ae87a764b1fa20',
  measurementId: 'G-5VYYMDLD1M',
}

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
}
