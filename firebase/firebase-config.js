import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyD2Bas-CUMyWVcRu1cy4wRbZqfO48-ipHQ",
    authDomain: "trouver-db.firebaseapp.com",
    projectId: "trouver-db",
    storageBucket: "trouver-db.appspot.com",
    messagingSenderId: "719795650634",
    appId: "1:719795650634:web:bc400d8e96446a71d9a6b3",
    measurementId: "G-B6XV6KSHPJ"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);