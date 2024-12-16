// Firebase SDK'yı import ediyoruz
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // auth ve GoogleAuthProvider'ı ekledik
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCd1z8AByFs2BfPyKjWprmwCIenOg15JA4",
  authDomain: "english-words-1b88e.firebaseapp.com",
  projectId: "english-words-1b88e",
  storageBucket: "english-words-1b88e.firebasestorage.app",
  messagingSenderId: "904575776210",
  appId: "1:904575776210:web:bb6938ef4e153cfdbf440b",
  measurementId: "G-2LE4WG97PX"
};

// Firebase uygulamasını başlat
const app = initializeApp(firebaseConfig);

// Firebase Authentication ve GoogleAuthProvider'ı başlatmak için
export const auth = getAuth(app);  // auth'ı dışa aktar
export const provider = new GoogleAuthProvider();  // GoogleAuthProvider'ı dışa aktar

// Firestore veritabanını başlatmak için
export const db = getFirestore(app);
