// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-app-14b02.firebaseapp.com",
  projectId: "mern-app-14b02",
  storageBucket: "mern-app-14b02.appspot.com",
  messagingSenderId: "87312087455",
  appId: "1:87312087455:web:c7636fcd93ead2a86da5aa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);