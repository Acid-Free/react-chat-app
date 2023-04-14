import React, { useContext, useState } from "react";
import AttachImageIcon from "../images/photo-plus.png";
import AttachIcon from "../images/paperclip.png";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import { handleSendMessage } from "../handleSendMessage";

const Input = () => {
  const [err, setError] = useState(false);

  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  // Function to handle sending messages
  const handleSend = async () => {
    await handleSendMessage(
      text,
      image,
      currentUser,
      data,
      setText,
      setImage,
      setError
    );
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Enter your message here"
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <div className="send">
        <img src={AttachIcon} alt="Attach file" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(event) => setImage(event.target.files[0])}
        />
        <label htmlFor="file">
          <img src={AttachImageIcon} alt="Attach" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
