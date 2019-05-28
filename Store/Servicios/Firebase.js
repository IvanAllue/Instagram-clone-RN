import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDuEaqsLEBj0O7BtcBMbxnrC7mgoM6B-_4",
    authDomain: "instagramclone-592e8.firebaseapp.com",
    databaseURL: "https://instagramclone-592e8.firebaseio.com",
    projectId: "instagramclone-592e8",
    storageBucket: "instagramclone-592e8.appspot.com",
    messagingSenderId: "190458332086",
    appId: "1:190458332086:web:4d5f9fea1b0ea213"
  };

  firebase.initializeApp(firebaseConfig);

  export const autenticacion = firebase.auth()
  export const baseDatos = firebase.database()
  export const auth = firebase.auth
  export const storage = firebase.storage()