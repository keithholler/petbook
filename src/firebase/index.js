import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH-Nppt1kVDV-5VClACmXciCEZY_utu2A",
  authDomain: "petbook-b612f.firebaseapp.com",
  projectId: "petbook-b612f",
  storageBucket: "petbook-b612f.appspot.com",
  messagingSenderId: "422297440438",
  appId: "1:422297440438:web:dd7e0bc9ecf7a593f25617",
  measurementId: "G-W0RQ45NJSZ",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
