import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    authDomain: "urbancartel-24.firebaseapp.com",
    apiKey: "AIzaSyCfriIRC6x2wR-23cUwrygiFi2BhuBGX2A",
    storageBucket: "urbancartel-24.appspot.com",
    projectId: "urbancartel-24",
    appId: "1:354947812189:web:91717458a8148a48c176b4",
    messagingSenderId: "354947812189",
    measurementId: "G-8ZT0BHYYX6"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();