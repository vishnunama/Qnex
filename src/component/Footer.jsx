import React from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'

function Footer() {

    const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <div style={{textAlign:"center", margin:"30px 0px"}}>
         <img
          style={{ width: "70px" }}
          className="img-header-logo"
          src="/src/assets/mybita-logo.png"
          alt="logo"
        />
        <div style={{marginTop:"20px", color:"#9CA0D2"}}>©2024-25 Qnex, All Rights Reserved By Qnex.</div>
 <FaArrowAltCircleUp
        style={{ fontSize: "40px", marginTop: "50px", cursor: "pointer" }}
        onClick={handleScrollToTop}
      />
    </div>
  )
}

export default Footer