import { signOut } from "@firebase/auth";
import React from "react";
import { auth } from "../firebase";

const User = () => {
  return (
    <div className="user">
      <button onClick={() => signOut(auth)}>Log out</button>
      {/* Placeholder image */}
      <img
        src="https://howtodrawforkids.com/wp-content/uploads/2017/03/how-to-draw-a-face-step-by-step.jpg"
        alt=""
      />
      <span>Sian Caleb</span>
    </div>
  );
};

export default User;
