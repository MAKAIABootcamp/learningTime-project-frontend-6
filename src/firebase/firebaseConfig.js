// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMqSk8FtlhHJ6vpFXg_t4-5mVNlOvFT3c",
  authDomain: "learningtime-project-frontend.firebaseapp.com",
  projectId: "learningtime-project-frontend",
  storageBucket: "learningtime-project-frontend.appspot.com",
  messagingSenderId: "697613367612",
  appId: "1:697613367612:web:d1bb144c9d0ede25f48639",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
