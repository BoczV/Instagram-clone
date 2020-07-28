import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCB7EtZUPWI9MaPetbC6RAblxH11VI0Rqw",
  authDomain: "instagram-clone-63fb4.firebaseapp.com",
  databaseURL: "https://instagram-clone-63fb4.firebaseio.com",
  projectId: "instagram-clone-63fb4",
  storageBucket: "instagram-clone-63fb4.appspot.com",
  messagingSenderId: "203858338600",
  appId: "1:203858338600:web:a097a54e91895fbb99e61d",
  measurementId: "G-TNES2CS922",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
