import React, { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    const searchQuery = query(
      collection(db, "users"),
      where("name", "==", username)
    );

    try {
      const querySnapshot = await getDocs(searchQuery);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const handleKey = (event) => {
    event.code === "Enter" && handleSearch();
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Search for user"
          onKeyDown={handleKey}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      {error && <span>Something unexpected happened</span>}
      {/* Only show this div if there is a user from query */}
      {user && (
        <div className="userChat">
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
