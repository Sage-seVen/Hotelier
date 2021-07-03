import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";

// firebase.initializeApp({
//   apiKey: "AIzaSyAnDlkgnFqDS7l9DiVc8bUdGzWgPD5aSzE",
//   authDomain: "hotelier-db52e.firebaseapp.com",
//   projectId: "hotelier-db52e",
//   storageBucket: "hotelier-db52e.appspot.com",
//   messagingSenderId: "65692481506",
//   appId: "1:65692481506:web:b36bc13b9572d903e42bbb",
//   measurementId: "G-PE2BPWKEMW"
// })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
