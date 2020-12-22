import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBdF5uMaYYRSkKoTl7Mi1C9HfQGiLfhBU8",
  authDomain: "linkedinclone-c4368.firebaseapp.com",
  projectId: "linkedinclone-c4368",
  storageBucket: "linkedinclone-c4368.appspot.com",
  messagingSenderId: "72930824880",
  appId: "1:72930824880:web:26d2508b2eab52da822175",
  measurementId: "G-6RWNQB4CK2"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };