import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDgEtyAcVA2Wp9AWd1VlhXrkbUdAskBqIg",
    authDomain: "pehnaawadb.firebaseapp.com",
    databaseURL: "https://pehnaawadb.firebaseio.com",
    projectId: "pehnaawadb",
    storageBucket: "pehnaawadb.appspot.com",
    messagingSenderId: "600408043259",
    appId: "1:600408043259:web:77f590630f7ae63ce88a5e",
    measurementId: "G-Y234HLLBSF"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;