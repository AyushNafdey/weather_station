// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9xKkU48QItiF9E8qLbd6YR8BtDT9JLFY",
  authDomain: "esp32-rtdb-7c4eb.firebaseapp.com",
  databaseURL: "https://esp32-rtdb-7c4eb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp32-rtdb-7c4eb",
  storageBucket: "esp32-rtdb-7c4eb.firebasestorage.app",
  messagingSenderId: "86860573299",
  appId: "1:86860573299:web:14b9b440ad0c217a95d806",
  measurementId: "G-PYQMLYXWV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;