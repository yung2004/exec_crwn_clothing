import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAA2Y1ptLqBTm7MbDZwow2OTQ0LHNLahe4",
    authDomain: "crwn-db-a79d7.firebaseapp.com",
    databaseURL: "https://crwn-db-a79d7.firebaseio.com",
    projectId: "crwn-db-a79d7",
    storageBucket: "crwn-db-a79d7.appspot.com",
    messagingSenderId: "463225307429",
    appId: "1:463225307429:web:045dfa3ed2e883d3b05acc"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provide = new firebase.auth.GoogleAuthProvider();
provide.setCustomParameters( { prompt: 'select_account' });  //pop up 
export const signInWithGoogle = () => auth.signInWithPopup(provide);

export default firebase;