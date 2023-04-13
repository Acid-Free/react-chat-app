import React from "react";
import VideoIcon from "../images/video.png";
import AddIcon from "../images/user-plus.png";
import MoreIcon from "../images/dots.png";
import Messages from "./Messages";
import Input from "./Input";

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
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
