import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDYPpSJL3Qeg4ioUcz3fZWyl7Y2xRKw51E",
    authDomain: "app1-7a275.firebaseapp.com",
    projectId: "app1-7a275",
    storageBucket: "app1-7a275.appspot.com",
    messagingSenderId: "325970871712",
    appId: "1:325970871712:web:d5aedcd87e0e79d04390c5"
  };

  //intialize firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  const goooleProvider = new firebase.auth.GoogleAuthProvider();
  export  { goooleProvider , facebookProvider };