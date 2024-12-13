// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;


// VITE_apiKey=AIzaSyDr3sqWdGEOo75-n3xtwCmbAv4rRpK0BSE
// VITE_authDomain=job-portal-ff64e.firebaseapp.com
// VITE_projectId=job-portal-ff64e
// VITE_storageBucket=job-portal-ff64e.firebasestorage.app
// VITE_messagingSenderId=1049794192451
// VITE_appId=1:1049794192451:web:9ab1f0ce26480b3556e0f6