// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZkELNsiIrKy2M19tUNpyDJ8Nbc4NVxrU",
  authDomain: "netflixgpt-6b7ed.firebaseapp.com",
  projectId: "netflixgpt-6b7ed",
  storageBucket: "netflixgpt-6b7ed.appspot.com",
  messagingSenderId: "141143402528",
  appId: "1:141143402528:web:e045d8c20b76c6c13a3445",
  measurementId: "G-EM5YF6X5WH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
