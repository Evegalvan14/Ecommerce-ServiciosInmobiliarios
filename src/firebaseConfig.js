
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDf0YNNmRS2XjUllx4VtC2IKli6EAv0vJU",
  authDomain: "e-commerce-decolove-th.firebaseapp.com",
  projectId: "e-commerce-decolove-th",
  storageBucket: "e-commerce-decolove-th.appspot.com",
  messagingSenderId: "181846239612",
  appId: "1:181846239612:web:09ca474ecddf7ae1495cf9"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)