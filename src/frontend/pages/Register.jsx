import React, { useState } from "react";
import AddIcon from "../images/photo-plus.png";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../backend/registerUser";

const Register = () => {
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const file = event.target[3].files[0];

    await registerUser(
      displayName,
      email,
      password,
      file,
      navigate,
      setError,
      setUploading
    );
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Generic Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" required />
          <input type="email" placeholder="email" required />
          <input type="password" placeholder="password" required />
          <input type="file" id="file" required />
          <label htmlFor="file">
            <img src={AddIcon} alt="Add avatar" />
            <span>Add an avatar</span>
          </label>
          <button disabled={uploading}>Sign up</button>
          {uploading && <span>Profile picture still uploading</span>}
          {error && <span>{error}</span>}
        </form>
        <p>
          Do you have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
