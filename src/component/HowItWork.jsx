import React from 'react'
import { FaBox } from 'react-icons/fa6'
import { LiaWalletSolid } from "react-icons/lia";
import { RxLightningBolt } from "react-icons/rx";



function HowItWork() {
  return (
    <div className='main-how-it-work' style={{margin:"70px "}}>
        <div style={{color:"blue", letterSpacing:"2.7px", fontWeight:"600"}}>HOW IT WORKS</div>
        <h1 style={{fontWeight:"700"}}>How To Start</h1>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  }}
>
  <div
    className='item-logo-otc'

    
  >
    <FaBox className='fa-box-icon' style={{ fontSize: "80px", color: "#6413EB" }} />
    <div>
      <h2>Select the QNEX OTC Data Package You Want</h2>
      <div style={{ color: "#9CA0D2", lineHeight:"1.7rem" }}>
        Choose from our tailored QNEX OTC data packages designed to meet your trading needs and help you make informed decisions with precision.
      </div>
    </div>
  </div>
  <div
    className='item-logo-otc'

    
  >
    <LiaWalletSolid className='fa-box-icon' style={{ fontSize: "80px", color: "#6413EB" }} />
    <div>
      <h2>Select the QNEX OTC Data Package You Want</h2>
      <div style={{ color: "#9CA0D2", lineHeight:"1.7rem" }}>
        Choose from our tailored QNEX OTC data packages designed to meet your trading needs and help you make informed decisions with precision.
      </div>
    </div>
  </div>
  <div
   className='item-logo-otc'
   
  >
    <RxLightningBolt className='fa-box-icon' style={{ fontSize: "80px", color: "#6413EB" }} />
    <div>
      <h2>Select the QNEX OTC Data Package You Want</h2>
      <div style={{ color: "#9CA0D2" , lineHeight:"1.8rem" }}>
        Choose from our tailored QNEX OTC data packages designed to meet your trading needs and help you make informed decisions with precision.
      </div>
    </div>
  </div>
</div>



    </div>
  )
}

export default HowItWork