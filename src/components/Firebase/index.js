import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB2k4cIQwm78aMEG-bpfPGSXJ9odRYHuaU",
    authDomain: "test-test-7921e.firebaseapp.com",
    databaseURL: "https://test-test-7921e-default-rtdb.firebaseio.com",
    projectId: "test-test-7921e",
    storageBucket: "test-test-7921e.appspot.com",
    messagingSenderId: "266178057716",
    appId: "1:266178057716:web:4bce5dd851da0c330215a1",
    measurementId: "G-QF887K08MJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;