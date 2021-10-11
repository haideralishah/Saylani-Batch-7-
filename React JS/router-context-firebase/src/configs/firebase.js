import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyC78s-ssNksImbAEKGZMj19Km8U_5NFD_U",
    authDomain: "testing-e1e4f.firebaseapp.com",
    projectId: "testing-e1e4f",
    storageBucket: "testing-e1e4f.appspot.com",
    messagingSenderId: "764881855683",
    appId: "1:764881855683:web:86fa853d0f83139040ae76",
    measurementId: "G-ZR6W70L1ET"
});

const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,

    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where
};
