import firebase from "firebase/app";

import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkTiDiz3CkHBjqFQXlPYXnLItjAS66lp0",
  authDomain: "scheduler-39cbb.firebaseapp.com",
  databaseURL: "https://scheduler-39cbb-default-rtdb.firebaseio.com",
  projectId: "scheduler-39cbb",
  storageBucket: "scheduler-39cbb.appspot.com",
  messagingSenderId: "612439951241",
  appId: "1:612439951241:web:cd711a3f50dfc483f68358",
  measurementId: "G-GG2XX8686C"
};

firebase.initializeApp(firebaseConfig);

export { firebase };