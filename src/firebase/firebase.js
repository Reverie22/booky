import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDaVwuhfpl1J5zwMMZfjdCByJROrr0POmI",
    authDomain: "bookyx-b7425.firebaseapp.com",
    databaseURL: "https://bookyx-b7425-default-rtdb.firebaseio.com",
    projectId: "bookyx-b7425",
    storageBucket: "bookyx-b7425.appspot.com",
    messagingSenderId: "928179007145",
    appId: "1:928179007145:web:c87f1be8141b1271df03b8"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore();

export default firebaseApp;