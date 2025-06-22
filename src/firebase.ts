
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCade2iunzNlZCTo2jHiGan8C8aKHmlprI",
  authDomain: "travel-spot-login.firebaseapp.com",
  projectId: "travel-spot-login",
  storageBucket: "travel-spot-login.firebasestorage.app",
  messagingSenderId: "873036670357",
  appId: "1:873036670357:web:1a09bbddbba2683b8c429c",
  measurementId: "G-BHWM263T20"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);