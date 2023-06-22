import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Web App's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBwMXvoSZug9bJNvk7wcvYQ28FRaJwb5LM",
  authDomain: "medbuddy-bb865.firebaseapp.com",
  projectId: "medbuddy-bb865",
  storageBucket: "medbuddy-bb865.appspot.com",
  messagingSenderId: "197977329346",
  appId: "1:197977329346:web:cde9c62a329776b6ae355b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);