// Firebase SDK'yı import ediyoruz
import { initializeApp } from "firebase/app";
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

// Firestore veritabanını başlatmak iç,n
export const db = getFirestore(app);