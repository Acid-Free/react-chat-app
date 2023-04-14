import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import AddIcon from "../images/photo-plus.png";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const file = event.target[3].files[0];

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Uses username for referencing user image
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          console.error(error);
          setError(true);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // Add updated name and avatar URL to user data in auth
          await updateProfile(response.user, {
            displayName,
            photoURL: downloadURL,
          });

          // Save user information to users collection (this is separate from authentication db)
          await setDoc(doc(db, "users", response.user.uid), {
            uid: response.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });

          // Create a document for a list of people a user interacted to
          await setDoc(doc(db, "userChats", response.user.uid), {});

          // Redirect to home page after successful registration
          navigate("/");
        }
      );
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Generic Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" />
          <label htmlFor="file">
            <img src={AddIcon} alt="Add avatar" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {error && <span>Something went wrong.</span>}
        </form>
        <p>
          Do you have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
