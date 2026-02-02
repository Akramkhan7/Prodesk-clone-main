// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuJc8eiKnXITwizZkWr7AkNhidjx2ngG0",
  authDomain: "prodesk-backend.firebaseapp.com",
  projectId: "prodesk-backend",
  storageBucket: "prodesk-backend.appspot.com",
  messagingSenderId: "241034816104",
  appId: "1:241034816104:web:bdf73282491eb6306169dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// This is the "brain" for your database (Contact Form data)
export const db = getFirestore(app);

// This is the "brain" for your file storage (Careers CV files)
export const storage = getStorage(app);