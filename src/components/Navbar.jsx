import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Generic Chat</span>
      <div className="user">
        {/* Placeholder image */}
        <img
          src="https://howtodrawforkids.com/wp-content/uploads/2017/03/how-to-draw-a-face-step-by-step.jpg"
          alt=""
        />
        <span>Sian</span>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
