// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import {initializeApp} from 'firebase/app'

import {
  getFirestore
} from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "YOUR_API_KEY",

    authDomain: "YOUR_PROJECT.firebaseapp.com",

    projectId: "YOUR_PROJECT_ID",

    storageBucket: "YOUR_PROJECT.appspot.com",

    messagingSenderId: "YOUR_SENDER_ID",

    appId: "YOUR_APP_ID"

  };

initializeApp(firebaseConfig)

const db = getFirestore()

export {db}