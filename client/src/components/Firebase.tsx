// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import  {firebase} from 'firebase';


import 'firebase/firestore';


const FirebaseConfig = {
    apiKey: "AIzaSyD5tQz-yNfCyHRZR3qpTh2KaEgzC1A2gRc",
    authDomain: "dating-app-89910.firebaseapp.com",
    projectId: "dating-app-89910",
    storageBucket: "dating-app-89910.appspot.com",
    messagingSenderId: "513157613426",
    appId: "1:513157613426:web:d38275aa1ffe3a59ccbfeb",
    measurementId: "G-KT1TN90FKQ",
   
  };

  const app = initializeApp(FirebaseConfig);

//   var db = firebase.firestore(app);
  const db = getFirestore(app);

  export default db