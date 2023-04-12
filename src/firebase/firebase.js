import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkBvDZdPFpLuTszmX1dSPaEFVE5ugKTi8",
  authDomain: "firstlinelogistics-8b0d0.firebaseapp.com",
  projectId: "firstlinelogistics-8b0d0",
  storageBucket: "firstlinelogistics-8b0d0.appspot.com",
  messagingSenderId: "461891891068",
  appId: "1:461891891068:web:a0f7fb7e9125544d487ef9",
  measurementId: "G-LNBWEES8XE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
