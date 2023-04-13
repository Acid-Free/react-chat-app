import React from "react";
import VideoIcon from "../images/video.png";
import AddIcon from "../images/user-plus.png";
import MoreIcon from "../images/dots.png";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Turtle</span>
        <div className="chatIcons">
          <img src={VideoIcon} alt="" />
          <img src={AddIcon} alt="" />
          <img src={MoreIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
