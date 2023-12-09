import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChuykK6IVheRAAEIYQPHsTiCbRC-oZDxM",
  authDomain: "react-booklist-with-firebase.firebaseapp.com",
  projectId: "react-booklist-with-firebase",
  storageBucket: "react-booklist-with-firebase.appspot.com",
  messagingSenderId: "536116759252",
  appId: "1:536116759252:web:eb020f2a6ac47ccab64941"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
