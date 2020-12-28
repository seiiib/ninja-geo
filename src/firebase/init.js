import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCtQf3T0cPyQrWCHSwi6dbrZfFUaWWi3CI",
  authDomain: "geo-ninjas-42d65.firebaseapp.com",
  projectId: "geo-ninjas-42d65",
  storageBucket: "geo-ninjas-42d65.appspot.com",
  messagingSenderId: "857378781157",
  appId: "1:857378781157:web:f182a11af25b0f1f9ae10c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()