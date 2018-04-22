import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD78Ec-TAmRylq00oG_GV7-GGKPo1Q0kV0",
    authDomain: "crud-38ac4.firebaseapp.com",
    databaseURL: "https://crud-38ac4.firebaseio.com",
    projectId: "crud-38ac4",
    storageBucket: "",
    messagingSenderId: "1053070125095"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('/notes')
