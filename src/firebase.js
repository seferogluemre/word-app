// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCd1z8AByFs2BfPyKjWprmwCIenOg15JA4",
  authDomain: "english-words-1b88e.firebaseapp.com",
  projectId: "english-words-1b88e",
  storageBucket: "english-words-1b88e.firebasestorage.app",
  messagingSenderId: "904575776210",
  appId: "1:904575776210:web:bb6938ef4e153cfdbf440b",
  measurementId: "G-2LE4WG97PX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
