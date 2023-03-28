// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8LTDtmVq93O31_n3FF8pSNrh3_QrK9ps",
  authDomain: "finanzas-a7c05.firebaseapp.com",
  projectId: "finanzas-a7c05",
  storageBucket: "finanzas-a7c05.appspot.com",
  messagingSenderId: "93875018588",
  appId: "1:93875018588:web:9527812873b642d8003f99"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {persistence: getReactNativePersistence(AsyncStorage)})
