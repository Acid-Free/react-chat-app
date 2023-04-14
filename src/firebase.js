import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyknTwYth6d3GNLk2FQgEWncE2TGvrhy4",
  authDomain: "react-chat-app-57f37.firebaseapp.com",
  projectId: "react-chat-app-57f37",
  storageBucket: "react-chat-app-57f37.appspot.com",
  messagingSenderId: "933396643001",
  appId: "1:933396643001:web:7b235848f905a377eb2f68",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
