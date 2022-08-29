import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBzKmuUnDyoW13aAVi9U8JN5Ob4vP_yBx4",
  authDomain: "login-page-ad76c.firebaseapp.com",
  projectId: "login-page-ad76c",
  storageBucket: "login-page-ad76c.appspot.com",
  messagingSenderId: "219706369559",
  appId: "1:219706369559:web:527ae9f4c426d6cb4b5e52",
  measurementId: "G-DZPGY7GF9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);