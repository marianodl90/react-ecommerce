
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"



const firebaseConfig = {
  apiKey: "AIzaSyBeWbxvqhNq8iYOgOMXyryQhTubpvSphSw",
  authDomain: "e-commerce-coderhouse-1beb1.firebaseapp.com",
  projectId: "e-commerce-coderhouse-1beb1",
  storageBucket: "e-commerce-coderhouse-1beb1.appspot.com",
  messagingSenderId: "586063745286",
  appId: "1:586063745286:web:3bd64efa97aa566c2d0e87",
  measurementId: "G-S0KN0PTRTL"
};

export const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
