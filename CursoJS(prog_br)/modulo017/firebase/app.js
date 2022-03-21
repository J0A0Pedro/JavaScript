// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATbStHBM659L45aoxQrGJq7jLOheFXiG0",
  authDomain: "colegio-35b3c.firebaseapp.com",
  projectId: "colegio-35b3c",
  storageBucket: "colegio-35b3c.appspot.com",
  messagingSenderId: "206162562526",
  appId: "1:206162562526:web:4fc1406c572c71b01da14f",
  measurementId: "G-HCFBPKVGYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);