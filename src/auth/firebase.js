// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyJ7VCkFvItMS-LJfwTAJmF_eol-j8A7o",
  authDomain: "frontend-bienal.firebaseapp.com",
  projectId: "frontend-bienal",
  storageBucket: "frontend-bienal.appspot.com",
  messagingSenderId: "569466571543",
  appId: "1:569466571543:web:a2ef0c5d6ae3fdb5694552",
  measurementId: "G-NE7EV0P88B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

