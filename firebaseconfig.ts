import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAmL0foXSdpLRxRDewqIzIr55yUMiOzUmg",
  authDomain: "snake-game-560b2.firebaseapp.com",
  projectId: "snake-game-560b2",
  storageBucket: "snake-game-560b2.appspot.com",
  messagingSenderId: "732332030951",
  appId: "1:732332030951:web:a769750ccbab3661869b42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
