import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Firebase config from Google Cloud Console
const firebaseConfig = {
    apiKey: "AIzaSyB0PTf5tkJmACuIU6uBKTUfMbezEBz6-8c",
    authDomain: "fir-auth-fadb0.firebaseapp.com",
    projectId: "fir-auth-fadb0",
    storageBucket: "fir-auth-fadb0.appspot.com",
    messagingSenderId: "415290173940",
    appId: "1:415290173940:web:3c95d977239ea0e7b8f1a1"
};

// Initialize firebase app
initializeApp(firebaseConfig);

// Initialize auth services
export const auth = getAuth();