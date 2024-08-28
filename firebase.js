// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNimorUv8iuMz8gbGhSX2GOnIIQ-6voCw",
  authDomain: "smart-flash-a4573.firebaseapp.com",
  projectId: "smart-flash-a4573",
  storageBucket: "smart-flash-a4573.appspot.com",
  messagingSenderId: "148629669387",
  appId: "1:148629669387:web:6bad7240c97b1dcc49690e",
  measurementId: "G-BPG6JHSQ5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};