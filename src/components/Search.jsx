import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search for user" />
      </div>
      <div className="userChat">
        {/* Placeholder image */}
        <img
          src="https://howtodrawforkids.com/wp-content/uploads/2017/03/how-to-draw-a-face-step-by-step.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Caleb</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
