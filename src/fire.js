import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyB2YiQ5CfmQBG5-BCaVlEmcETs_y3RUdBQ",
    authDomain: "arc-final-project.firebaseapp.com",
    databaseURL: "https://arc-final-project-default-rtdb.firebaseio.com",
    projectId: "arc-final-project",
    storageBucket: "arc-final-project.appspot.com",
    messagingSenderId: "768728549775",
    appId: "1:768728549775:web:e7279786309a1c6766e3fa",
    measurementId: "G-QNBCNVJBTC"
};
var fire = firebase.initializeApp(firebaseConfig);
export default fire;