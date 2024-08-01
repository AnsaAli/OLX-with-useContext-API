// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALBirAU2R2cGjwwAhgnm87UYT7MKkQAFU",
  authDomain: "olxclone-b8bc4.firebaseapp.com",
  projectId: "olxclone-b8bc4",
  storageBucket: "olxclone-b8bc4.appspot.com",
  messagingSenderId: "648641383201",
  appId: "1:648641383201:web:f52a666e65c7ec49d10c60",
  measurementId: "G-HP3MLK1JS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Create a root reference
export const storage = getStorage();