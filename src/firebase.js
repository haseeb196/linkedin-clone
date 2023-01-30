
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyA-cWb3SrEdGE3W5nBccH-82By7kSSFFYs",
  authDomain: "linkedin-clone-e629b.firebaseapp.com",
  projectId: "linkedin-clone-e629b",
  storageBucket: "linkedin-clone-e629b.appspot.com",
  messagingSenderId: "424359908957",
  appId: "1:424359908957:web:fda56c0aeb2fbd64151fb4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

 export {auth, provider};
 export default db;