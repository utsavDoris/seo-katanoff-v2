import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  APIKEY,
  APPID,
  AUTHDOMAIN,
  MESSAGINGSENDERID,
  PROJECTID,
  STORAGEBUCKET,
} from "./utils/environments";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
};

// Initialize Firebase

export const defaultApp = initializeApp(firebaseConfig);
export const db = getDatabase(defaultApp);
