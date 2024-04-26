// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLlcs6AE72aT1MSg-kx3zHWRjDd5eRSYU",
  authDomain: "gokul-pg-c2c42.firebaseapp.com",
  projectId: "gokul-pg-c2c42",
  storageBucket: "gokul-pg-c2c42.appspot.com",
  messagingSenderId: "608742060689",
  appId: "1:608742060689:web:fecde5dadd3e211dccc530",
  measurementId: "G-QSB18P7N1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { app, storage };