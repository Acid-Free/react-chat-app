import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        {/* Placeholder image */}
        <img
          src="https://howtodrawforkids.com/wp-content/uploads/2017/03/how-to-draw-a-face-step-by-step.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Caleb</span>
          <p>This is the latest message</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
