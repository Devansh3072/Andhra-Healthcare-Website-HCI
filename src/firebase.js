import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyByi_9mDoDuhzYfNOpGXgu1axYcasE53jM",
  authDomain: "andhrahealthcare-website.firebaseapp.com",
  projectId: "andhrahealthcare-website",
  storageBucket: "andhrahealthcare-website.appspot.com",
  messagingSenderId: "247474441187",
  appId: "1:247474441187:web:074a334bbf24800d206ed6",
  measurementId: "G-7CS5GYG2T0"
  };
const app= firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore();
export const auth=app.auth();
export default app;