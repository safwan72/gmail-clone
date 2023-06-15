// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// auth
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKK2FXCltJk6pQYMgrwyi86xSpHpYDbNQ",
  authDomain: "clone-f968b.firebaseapp.com",
  projectId: "clone-f968b",
  storageBucket: "clone-f968b.appspot.com",
  messagingSenderId: "96238624390",
  appId: "1:96238624390:web:dbd3abcf869507c8383b07"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const auth=firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export {db,auth,provider}