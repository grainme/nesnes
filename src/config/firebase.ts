// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcgEsxTsfCr9vLppzBErpbNXugbUaB3xo",
  authDomain: "nesnes-375e9.firebaseapp.com",
  projectId: "nesnes-375e9",
  storageBucket: "nesnes-375e9.appspot.com",
  messagingSenderId: "306702303359",
  appId: "1:306702303359:web:88101cc6103c383e297f4a",
  measurementId: "G-WB91E7LE7V",
};

// Initialize Firebase
getAnalytics(initializeApp(firebaseConfig));
