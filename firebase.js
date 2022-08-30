// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAGF1_1bVcGyEZTNSFzBrIXFonaWxx71y8",

  authDomain: "pokeapi-e30dc.firebaseapp.com",

  projectId: "pokeapi-e30dc",

  storageBucket: "pokeapi-e30dc.appspot.com",

  messagingSenderId: "549827412436",

  appId: "1:549827412436:web:a6e7307558b06f1cbe5641"
};


// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
export default function database() {db, firebase};

