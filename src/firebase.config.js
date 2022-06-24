
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBT9IECP2vtuJtJl0Yq4ZRBotspTnmhll0",
  authDomain: "unique-style-ade84.firebaseapp.com",
  projectId: "unique-style-ade84",
  storageBucket: "unique-style-ade84.appspot.com",
  messagingSenderId: "875023971471",
  appId: "1:875023971471:web:90c490d20773e1f1a02cfa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

