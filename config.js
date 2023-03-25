import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmxLFu5Dm_dpjGUnymNMSIyNZTsm7SXXs",
  authDomain: "ride-stage-4-3eedd.firebaseapp.com",
  projectId: "ride-stage-4-3eedd",
  storageBucket: "ride-stage-4-3eedd.appspot.com",
  messagingSenderId: "639860956869",
  appId: "1:639860956869:web:9d583a906d8d4b6a40daac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
