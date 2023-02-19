import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJWdGohYGCcWT8snb58l09SVmT3yHUfPs",
  authDomain: "uveryderiv.firebaseapp.com",
  projectId: "uveryderiv",
  storageBucket: "uveryderiv.appspot.com",
  messagingSenderId: "181839557389",
  appId: "1:181839557389:web:430e9c730400782661f644",
  measurementId: "G-2TJNWJGJ1D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));

