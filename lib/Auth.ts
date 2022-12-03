import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/client";

export const GoogleLogin = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

export const TwitterLogin = () => {
  const provider = new TwitterAuthProvider();
  signInWithPopup(auth, provider);
};

export const logout = () => {
  signOut(auth);
};
