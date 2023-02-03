// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARBJ37-RAQj5kYt6zifAqFDpRMeog1lpM",
  authDomain: "appppp-9ed2a.firebaseapp.com",
  projectId: "appppp-9ed2a",
  storageBucket: "appppp-9ed2a.appspot.com",
  messagingSenderId: "971285686429",
  appId: "1:971285686429:web:921d4772616badbf09cc74",
  measurementId: "G-8TDR766S4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);