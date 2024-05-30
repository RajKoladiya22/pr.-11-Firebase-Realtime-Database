// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMfv3chohkYadJLBVsufFb4J1LtdIZ-KE",
  authDomain: "fir-app-b910f.firebaseapp.com",
  databaseURL: "https://fir-app-b910f-default-rtdb.firebaseio.com",
  projectId: "fir-app-b910f",
  storageBucket: "fir-app-b910f.appspot.com",
  messagingSenderId: "545371448092",
  appId: "1:545371448092:web:0b820584d94b2e017b90d9",
  measurementId: "G-8CXW44CPH1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
