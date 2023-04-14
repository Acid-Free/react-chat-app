import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return null;
  } catch (error) {
    console.error(error);
    return error.code;
  }
};
