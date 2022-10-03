// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-CbbPMDFUIs5clbtdfF-mWTlfDk3j_ZU",
  authDomain: "yapchat-af9d8.firebaseapp.com",
  projectId: "yapchat-af9d8",
  storageBucket: "yapchat-af9d8.appspot.com",
  messagingSenderId: "1011413209051",
  appId: "1:1011413209051:web:2300a35db26a35486921fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();