import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvZGjY960ozg33gdfmzwf8sTcmCq3do6U",
  authDomain: "kapusta-c9147.firebaseapp.com",
  projectId: "kapusta-c9147",
  storageBucket: "kapusta-c9147.firebasestorage.app",
  messagingSenderId: "91415513983",
  appId: "1:91415513983:web:a3316404cabbf66496684a",
  measurementId: "G-CNFFWNL7TF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
