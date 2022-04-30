// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW8ZDhR8n04oIgxUgSTk_27cbQQlMMqTI",
  authDomain: "assignment-11-93ea1.firebaseapp.com",
  projectId: "assignment-11-93ea1",
  storageBucket: "assignment-11-93ea1.appspot.com",
  messagingSenderId: "128309766504",
  appId: "1:128309766504:web:bd1005ff3554cab2310edd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export  default auth;