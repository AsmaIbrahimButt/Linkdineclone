import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCVJcnOiGbl9pb_2yJo-yDSlRZguUKhs68",
    authDomain: "linkdin-clone-858c7.firebaseapp.com",
    projectId: "linkdin-clone-858c7",
    storageBucket: "linkdin-clone-858c7.appspot.com",
    messagingSenderId: "261456885646",
    appId: "1:261456885646:web:bfae2c4f361452a4de96df"
  };
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };