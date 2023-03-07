import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDftZDzJ66O488ZCepskxYp4FHJBt377Q4",
  authDomain: "blogo-187d0.firebaseapp.com",
  databaseURL:
    "https://blogo-187d0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blogo-187d0",
  storageBucket: "blogo-187d0.appspot.com",
  messagingSenderId: "28414783269",
  appId: "1:28414783269:web:a7129bcaf9ac8690d274cc",
  measurementId: "G-RPN7PQFCNX",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
