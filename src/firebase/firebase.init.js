// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr3sqWdGEOo75-n3xtwCmbAv4rRpK0BSE",
  authDomain: "job-portal-ff64e.firebaseapp.com",
  projectId: "job-portal-ff64e",
  storageBucket: "job-portal-ff64e.firebasestorage.app",
  messagingSenderId: "1049794192451",
  appId: "1:1049794192451:web:9ab1f0ce26480b3556e0f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()