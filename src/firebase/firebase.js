import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEiXebPZuMHBmC1bA0_B5BqfnsN6aiAkk",
  authDomain: "logistic-suite.firebaseapp.com",
  projectId: "logistic-suite",
  storageBucket: "logistic-suite.appspot.com",
  messagingSenderId: "120266016160",
  appId: "1:120266016160:web:8ed82486f53135b13690c5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
