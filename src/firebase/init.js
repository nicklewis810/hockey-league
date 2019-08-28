import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBlWaN7ppZGS56SudlLRuRcJwONATWkPyk",
  authDomain: "hockey-league-aa693.firebaseapp.com",
  databaseURL: "https://hockey-league-aa693.firebaseio.com",
  projectId: "hockey-league-aa693",
  storageBucket: "hockey-league-aa693.appspot.com",
  messagingSenderId: "287660371506",
  appId: "1:287660371506:web:c34cc864d7752c14"
};
// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);

export default firebaseapp.firestore();
