import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAUXqQ5RlJMw-3OBY1_JaVrOkbp8U_AmIw",
    authDomain: "adizon-64d8b.firebaseapp.com",
    projectId: "adizon-64d8b",
    storageBucket: "adizon-64d8b.appspot.com",
    messagingSenderId: "332817810510",
    appId: "1:332817810510:web:bef6414ace4cb4afe2ef1f",
    measurementId: "G-XQQL88ZHRE"
});

const db = firebase.firestore();
const auth =firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };
