// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD21dynjT-fk3HPM9hbfRLzwIT6oe5-3U0",
  authDomain: "bestiary-22978.firebaseapp.com",
  projectId: "bestiary-22978",
  storageBucket: "bestiary-22978.appspot.com",
  messagingSenderId: "341431236247",
  appId: "1:341431236247:web:7d9526eb519aecb4fa9bd2",
  measurementId: "G-PPHXE24DJW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
