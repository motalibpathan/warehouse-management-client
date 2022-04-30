// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqTcQ6dR7zrczeEzi9ahZ_64KLxVOVcnA",
  authDomain: "warehouse-management-85499.firebaseapp.com",
  projectId: "warehouse-management-85499",
  storageBucket: "warehouse-management-85499.appspot.com",
  messagingSenderId: "394877936945",
  appId: "1:394877936945:web:def03829ca66f03c1b3c10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
