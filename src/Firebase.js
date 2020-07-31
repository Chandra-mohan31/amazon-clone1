import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEgHUmDzJp9vxV_yjJJnucl7x9tNyXm3s",
    authDomain: "newapp-22ead.firebaseapp.com",
    databaseURL: "https://newapp-22ead.firebaseio.com",
    projectId: "newapp-22ead",
    storageBucket: "newapp-22ead.appspot.com",
    messagingSenderId: "950253735373",
    appId: "1:950253735373:web:b7c3622a090187330b4884",
    measurementId: "G-YZKF4HKRY9"

});


const auth = firebase.auth();
export {auth};