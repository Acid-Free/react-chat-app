import React from "react";
import Add from "../images/photo-plus.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Generic Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Log in</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
