import React from "react";
import "./Thumb.css";
import { HiOutlineRocketLaunch } from "react-icons/hi2";


function Thumb() {
  return (
    <div className="thumb-container">
      <div className="thumb-content">
        <img
          src="/src/assets/thumb.png"
          alt="Hand holding a phone"
          className="thumb-image"
        />
        <div className="thumb-text">
          <h2>Contact Now</h2>
          <button className="thumb-button">
            <HiOutlineRocketLaunch /> Telegram Support
          </button>
        </div>
      </div>
    </div>
  );
}

export default Thumb;
