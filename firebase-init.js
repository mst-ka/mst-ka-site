// Import the functions for SDKs we need
import { initializeApp } from "firebase/app";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
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

// Initialize App Check
if (typeof window !== "undefined") {
  try {
    // Enable debug mode in development
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      window.self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    }

    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(
        "6Lf59QQnAAAAAEeiSfQeDKzEyCGFSfmWX1vYVUL1"
      ),
      isTokenAutoRefreshEnabled: true,
    });
  } catch (error) {
    console.warn("App Check initialization failed:", error);
  }
}

// Initialize Realtime Database
const database = getDatabase(app);

// Connect to emulator if in development
if (
  typeof window !== "undefined" &&
  (window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "localhost")
) {
  connectDatabaseEmulator(database, "127.0.0.1", 9000);
}

// Expose database instance to rest of application
export default database;
