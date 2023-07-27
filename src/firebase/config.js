import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA44-u976Iggejso9YPClYRJQLP-49-ro",
  authDomain: "miniblog-51f7a.firebaseapp.com",
  projectId: "miniblog-51f7a",
  storageBucket: "miniblog-51f7a.appspot.com",
  messagingSenderId: "422203629275",
  appId: "1:422203629275:web:58bdd602ddefad347f76fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
