import React, { useContext } from "react";
import { AuthContext } from "../../backend/context/AuthContext";
import { ChatContext } from "../../backend/context/ChatContext";
import { getTimeAgo } from "../../backend/helpers/Time";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div
      className={`message ${message.senderId === currentUser.uid && "current"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{getTimeAgo(message.date.seconds)}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.image && <img src={message.image} alt="Attached" />}
      </div>
    </div>
  );
};

export default Message;
