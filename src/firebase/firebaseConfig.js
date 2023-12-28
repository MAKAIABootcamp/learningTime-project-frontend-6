// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9nvJ-kMf4SIozdIRgkelytP3h41ibhVc",
  authDomain: "proyecto-demoday.firebaseapp.com",
  projectId: "proyecto-demoday",
  storageBucket: "proyecto-demoday.appspot.com",
  messagingSenderId: "480513280975",
  appId: "1:480513280975:web:9a862ff607a20353b6e0ba",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
