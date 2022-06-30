import firebase from "firebase/app";
import'firebase/auth';
import'firebase/database';



const config = 

{
    apiKey: "AIzaSyDtnXFP3h-5XXAeRAZxbHcLNS5pp7gSqlQ",
    authDomain: "chat-web-wpp.firebaseapp.com",
    databaseURL: "https://chat-web-wpp-default-rtdb.firebaseio.com",
    projectId: "chat-web-wpp",
    storageBucket: "chat-web-wpp.appspot.com",
    messagingSenderId: "295210810969",
    appId: "1:295210810969:web:d4bcbe9fda1975facdbb48"
  };
  const app = firebase.initializeApp(config);
  export const auth = app.auth();
  export const database = app.database();
  