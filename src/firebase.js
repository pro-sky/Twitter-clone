// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  import firebase from "firebase"; not working due to update in firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC13mtfc0SvsiwN7R4EmUrgbAeAEykfS_k",
    authDomain: "twitter-clone-4817f.firebaseapp.com",
    databaseURL:"https://twitter-clone-4817f.firebaseapp.com",
    projectId: "twitter-clone-4817f",
    storageBucket: "twitter-clone-4817f.appspot.com",
    messagingSenderId: "844210618476",
    appId: "1:844210618476:web:4717453b404ee269131849",
    measurementId: "G-G4TEQ1Y146"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();


  export default db;