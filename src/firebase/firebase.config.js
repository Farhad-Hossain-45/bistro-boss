// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXXV85DISwybDoBoGxFfWNcX0uizCe-9w",
  authDomain: "project-one-64def.firebaseapp.com",
  projectId: "project-one-64def",
  storageBucket: "project-one-64def.appspot.com",
  messagingSenderId: "301269063622",
  appId: "1:301269063622:web:d7bb887dd4765aa24304c7",
  measurementId: "G-G71BNK8VQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
