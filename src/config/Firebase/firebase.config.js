// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAZzHekNjFvGSAaGO2j3WEM1OFg3mAUDA",
  authDomain: "urban-state-client.firebaseapp.com",
  projectId: "urban-state-client",
  storageBucket: "urban-state-client.appspot.com",
  messagingSenderId: "269612187685",
  appId: "1:269612187685:web:d08ff953a8b520e745ffcc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);