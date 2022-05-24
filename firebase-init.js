// Import the functions for SDKs we need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

let firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

//If testing the Realtime Database locally via emulator, use the Emulated Realtime Database URL
//instead of the Realtime Database URL for the production application
if (location.hostname === "127.0.0.1" || location.hostname === "localhost") {
  firebaseConfig = {
    databaseURL: "http://127.0.0.1:9000?ns=mst-ka",
  };
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Initialize Realtime Database
const database = getDatabase(app);

//expose database instance to rest of application
export default database;