import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfei77maHQ40CHlNLdoWsl56Jq_DMYDy8",
  authDomain: "whatsapp-1e52e.firebaseapp.com",
  projectId: "whatsapp-1e52e",
  storageBucket: "whatsapp-1e52e.appspot.com",
  messagingSenderId: "705832354608",
  appId: "1:705832354608:web:d5eb0dc925625d0c68fef5",
  measurementId: "G-Z3WL8TFHJ8",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
