import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { searchUser, createChat } from "../searchUtils";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    try {
      const users = await searchUser(username);
      // Assuming only one user can be found with the given username
      setUser(users[0]);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const handleKey = (event) => {
    event.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    try {
      await createChat(currentUser, user);
    } catch (error) {
      console.error(error);
      setError(true);
    }

    setUser(null);
    setUsername("");
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Search for user"
          onKeyDown={handleKey}
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
      </div>
      {error && <span>Something unexpected happened</span>}
      {/* Only show this div if there is a user from query */}
      {user && (
        <div className="userChat" onClick={handleSelect}>
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
