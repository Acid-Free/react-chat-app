import React from "react";
import AttachImageIcon from "../images/photo-plus.png";
import AttachIcon from "../images/paperclip.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Enter your message here" />
      <div className="send">
        <img src={AttachIcon} alt="Attach file" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={AttachImageIcon} alt="Attach image" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
