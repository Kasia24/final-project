// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvZGjY960ozg33gdfmzwf8sTcmCq3do6U",
  authDomain: "kapusta-c9147.firebaseapp.com",
  projectId: "kapusta-c9147",
  storageBucket: "kapusta-c9147.firebasestorage.app",
  messagingSenderId: "91415513983",
  appId: "1:91415513983:web:a3316404cabbf66496684a",
  measurementId: "G-CNFFWNL7TF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
