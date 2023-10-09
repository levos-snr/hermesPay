/** @format */

import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdq6etQFOOgDiRexjhY3HPQHJzKN2QLds",
  authDomain: "hermespay-app.firebaseapp.com",
  projectId: "hermespay-app",
  storageBucket: "hermespay-app.appspot.com",
  messagingSenderId: "449144121441",
  appId: "1:449144121441:web:72193e9dc44fbc75a2a220",
  measurementId: "G-YHT3GM30YM",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
