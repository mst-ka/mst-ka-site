// Import the functions for SDKs we need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

let firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
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