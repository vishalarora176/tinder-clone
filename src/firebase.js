import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCpIKWUzh8nRwfypP7M-Ys8A_yX4B0qqg0",
  authDomain: "tinder-clone-7b74f.firebaseapp.com",
  projectId: "tinder-clone-7b74f",
  storageBucket: "tinder-clone-7b74f.appspot.com",
  messagingSenderId: "713269473221",
  appId: "1:713269473221:web:4954ae85f1ea05c608a5ac",
  measurementId: "G-DEGZKC96CL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;