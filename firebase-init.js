// Import the functions for SDKs we need
import { initializeApp } from "firebase/app";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyBl8iYJ7oa5NKdkXa387f6tj9ZyJlqu3Co",
  authDomain: "mst-ka.firebaseapp.com",
  databaseURL: "https://mst-ka.firebaseio.com",
  projectId: "mst-ka",
  storageBucket: "mst-ka.appspot.com",
  messagingSenderId: "1013954571954",
  appId: "1:1013954571954:web:0d961bb3a90768cf2ca3ab",
  measurementId: "G-GS55KK9LT6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
  import("firebase/app-check").then((firebaseAppCheck) => {
    firebaseAppCheck.initializeAppCheck(app, {
      provider: new firebaseAppCheck.ReCaptchaV3Provider(
        "6Lf59QQnAAAAAEeiSfQeDKzEyCGFSfmWX1vYVUL1"
      ),
      isTokenAutoRefreshEnabled: true,
    });
  });
}

//Initialize Realtime Database
const database = getDatabase(app);

//If testing the Realtime Database locally via emulator, use the Emulated Realtime Database URL
//instead of the Realtime Database URL for the production application
typeof location !== "undefined" &&
(location.hostname === "127.0.0.1" || location.hostname === "localhost")
  ? connectDatabaseEmulator(database, "127.0.0.1", 9000)
  : null;

//expose database instance to rest of application
export default database;
