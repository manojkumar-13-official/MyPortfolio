// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdxthEu45hlymp_14zJixXnR-h8iMNvM4",
  authDomain: "manojkumar13-bb8a1.firebaseapp.com",
  projectId: "manojkumar13-bb8a1",
  storageBucket: "manojkumar13-bb8a1.firebasestorage.app",
  messagingSenderId: "683728068866",
  appId: "1:683728068866:web:30b4a625a2176e6e97e21b",
  measurementId: "G-92KJN8MNTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
