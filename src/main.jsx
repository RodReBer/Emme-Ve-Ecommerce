import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJofyxP5rXX5Kiut8b3JSy3E4cpwS77VI",
  authDomain: "emmeve-8dffb.firebaseapp.com",
  projectId: "emmeve-8dffb",
  storageBucket: "emmeve-8dffb.appspot.com",
  messagingSenderId: "507701476114",
  appId: "1:507701476114:web:2df74c4b94ac572506d1cb",
  measurementId: "G-DD493S3DTD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App className="h-full" />
  </React.StrictMode>
);
