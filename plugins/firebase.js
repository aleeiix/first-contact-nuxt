import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyBs0faR3t9jnfyvA_knHM6RZ5LhM6PQisk",
  authDomain: "nuxt-crud-b215a.firebaseapp.com",
  databaseURL: "https://nuxt-crud-b215a.firebaseio.com",
  projectId: "nuxt-crud-b215a",
  storageBucket: "nuxt-crud-b215a.appspot.com",
  messagingSenderId: "740279110708",
  appId: "1:740279110708:web:29e283a18819d4fe84ce61"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
