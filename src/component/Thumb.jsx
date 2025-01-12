import React from "react";
import "./Thumb.css";
import { HiOutlineRocketLaunch } from "react-icons/hi2";


function Thumb() {
  return (
    <div className="thumb-container">
      <div className="thumb-content">
        <img
          src="img/thumb.png"
          alt="Hand holding a phone"
          className="thumb-image"
        />
        <div className="thumb-text">
          <h2>Contact Now</h2>
          <a style={{textDecoration:"none"}} href="https://t.me/+3lFtZHNgFks4NGM1" target='blank' className="thumb-button">
            <HiOutlineRocketLaunch /> Telegram Support
          </a>
        </div>
      </div>
    </div>
  );
}

export default Thumb;
