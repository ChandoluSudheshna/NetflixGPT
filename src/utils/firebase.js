// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwz6Fa5GJ3FN-V5EDvhsswnjVODwCy72U",
  authDomain: "netflixgpt-96ae6.firebaseapp.com",
  projectId: "netflixgpt-96ae6",
  storageBucket: "netflixgpt-96ae6.firebasestorage.app",
  messagingSenderId: "725138080376",
  appId: "1:725138080376:web:0a698c664efa747002e38d",
  measurementId: "G-NM73JS437S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();