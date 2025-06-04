// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {
  getStorage
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2iRQOv6nNQGOxLtJsN0Uget4CBH9doCo",
  authDomain: "meet9ja-a3cc.firebaseapp.com",
  projectId: "meet9ja-a3cc",
  storageBucket: "meet9ja-a3cc.appspot.com",
  messagingSenderId: "1065158529421",
  appId: "1:1065158529421:web:0d92fd069897568531edc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

// Export all
export {
  auth,
  db,
  storage,
  googleProvider,
  facebookProvider,
  twitterProvider
};
