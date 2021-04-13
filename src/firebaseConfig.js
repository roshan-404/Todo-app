import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA35okXh9N3wqd4E8Pu1fqGlIzPG8z7NPE",
    authDomain: "todoapp-c1b02.firebaseapp.com",
    projectId: "todoapp-c1b02",
    storageBucket: "todoapp-c1b02.appspot.com",
    messagingSenderId: "21061777033",
    appId: "1:21061777033:web:717ea1dadb3ecfe1b37858"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };