import { signOut } from "@firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const User = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="user">
      <button onClick={() => signOut(auth)}>Log out</button>
      <img src={currentUser.photoURL} alt="Current user avatar" />
      <span>{currentUser.displayName}</span>
    </div>
  );
};

export default User;
