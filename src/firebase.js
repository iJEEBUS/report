// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCG5q0KgjkxEg0Nu7FhRA3Pnlk04sy-Oq0",
    authDomain: "aihpi-bce6a.firebaseapp.com",
    databaseURL: "https://aihpi-bce6a.firebaseio.com",
    projectId: "aihpi-bce6a",
    storageBucket: "aihpi-bce6a.appspot.com",
    messagingSenderId: "933075252049",
    appId: "1:933075252049:web:e7a8e899bf842aca"
  };


export default firebase.initializeApp(firebaseConfig);