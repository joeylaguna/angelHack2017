import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBuN3uSqlrJ2LSu1HRZ5mrIPSbExt0rcPE",
  authDomain: "angelhack2017-23224.firebaseapp.com",
  databaseURL: "https://angelhack2017-23224.firebaseio.com",
  projectId: "angelhack2017-23224",
  storageBucket: "angelhack2017-23224.appspot.com",
  messagingSenderId: "262134025137"
};

var firebaseApp = firebase.initializeApp(config);

export default firebaseApp;