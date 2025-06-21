// src/firebase.js
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCade2iunzNlZCTo2jHiGan8C8aKHmlprI",
//   authDomain: "travel-spot-login.firebaseapp.com",
//   projectId: "travel-spot-login",
//   appId: "YOUR_APP_ID",
//   // อื่น ๆ ตามที่ Firebase ให้มา
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCade2iunzNlZCTo2jHiGan8C8aKHmlprI",
  authDomain: "travel-spot-login.firebaseapp.com",
  projectId: "travel-spot-login",
  storageBucket: "travel-spot-login.firebasestorage.app",
  messagingSenderId: "873036670357",
  appId: "1:873036670357:web:1a09bbddbba2683b8c429c",
  measurementId: "G-BHWM263T20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);