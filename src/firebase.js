import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvuIBclT92A_E2xqdyomctPaTiP-_aTSg",
  authDomain: "chat-app-913b7.firebaseapp.com",
  projectId: "chat-app-913b7",
  storageBucket: "chat-app-913b7.appspot.com",
  messagingSenderId: "1007619477363",
  appId: "1:1007619477363:web:40e6d736a8021d2c2bff06",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
