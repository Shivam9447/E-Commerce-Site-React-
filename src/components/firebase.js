import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA3UclO9S2uY0FG7WmhxBBGL33GRJ_WDvY",
  authDomain: "shivampro-6f5a8.firebaseapp.com",
  projectId: "shivampro-6f5a8",
  storageBucket: "shivampro-6f5a8.appspot.com",
  messagingSenderId: "993578855247",
  appId: "1:993578855247:web:45fc0471c6e1baa17a733a"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {firestore}