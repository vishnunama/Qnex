import React, { useState } from 'react';
import "./Home.css";
import { FaTelegram } from "react-icons/fa";
import DropDown from './DropDown';
// import { IoMenu } from 'react-icons/io5';
import { VscMenu } from "react-icons/vsc";
import { Link } from 'react-router-dom';


function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <div className='main-header-logo-contanier' style={{ display: "flex", justifyContent: "space-between", margin:"10px 80px", alignItems: "center" }}>
        <Link to="/">
        <img
        
          style={{ width: "80px" }}
          className="img-header-logo"
          src="img/mybita-logo.png"
          alt="logo"
        />
        </Link>
        <div>
           
       
        <div className='main-dropdown-size' style={{display:"flex", alignItems:"center"}}>
           <div className="header-title-in" style={{ display: "flex", gap: "40px" }}>
          <Link to="./" style={{ color: "#0047FF", textDecoration:"none" }} >Home</Link>
          <a>Contact</a>
        </div>

        <div>
          <div
            style={{ fontSize: "25px", cursor:"pointer" }}
            className="btn-primary"
            onClick={toggleSidebar}
          >
             <VscMenu />
          </div>
          <DropDown isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>


        <div className='telegram-bot-btn'
          style={{
            display: "flex",
            gap: "10px",
            border: "2px solid #fff",
            alignItems: "center",
           
          }}
        >
          <FaTelegram />
          <a href="https://t.me/+3lFtZHNgFks4NGM1" target='blank'
            className="font-telegram"
            style={{ textDecoration: "none", outline: "none", color: "#fff" }}
           
          >
            Telegram Bot
          </a>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
