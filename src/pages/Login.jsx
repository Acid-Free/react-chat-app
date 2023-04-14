import React, { useState } from "react";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to home page after successful sign in
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(error.code);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Generic Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Log in</button>
          {error && <span>{error}</span>}
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
