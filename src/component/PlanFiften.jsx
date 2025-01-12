import React from 'react'
import "./Plan.css"
// import { FaRegMoneyBill1 } from "react-icons/fa6";
import { RxLightningBolt } from 'react-icons/rx';
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function PlanFiften() {
  return (
   <div >
      <div className='three-plan-main-in'>
      <div className='plan-inner'>
          <div className='plan-details-inner-in' style={{textAlign:"center"}}>
              <h1>QNEX OTC DATA PACKAGE </h1>
              <span>QNEX SOFTWARE</span>
          </div>
          </div>
      </div>
      <div className='flex-main-plan-inner' style={{display:"flex", margin:"50px", gap:"40px"}}>
      {/* <div className='main-plan-container' style={{display:"flex", alignItems:"flex-start", gap:"10px", borderRadius:"20px"}}>
          <img style={{width:"80px", height:"80px"}} src="img/coin.png" alt="" />
          <div  >
          <h2>QNEX OTC DATA PACKAGE</h2>
          <span>Fastest Network</span>
          </div>
      </div> */}
  <div style={{borderRadius:"20px"}}  className='tex-plan-mainner'>
       <div className='main-plan-item' style={{borderRadius:"20px", display:"flex", gap:"10px", marginTop:"15px"}}  >
          <img style={{width:"80px", height:"80px"}} src="img/coin.png" alt="" />
          <div>
          <div style={{fontSize:"clamp(1.5rem, 2vw, 1.9rem)", fontWeight:"bold"}}>QNEX OTC DATA PACKAGE</div>
          <span style={{fontSize:"clamp(5px, 3vw, 1rem)",}}>Fastest Network</span>
          </div>
          {/* <span>The first thing you need to do to Buy the Package to purchase our Most Trusted and Reliable Software. After purchasing the Package, you will be given a downloading link via email. You can download the software from there and after purchase for support you can connect with our team via our Telegram Bot.</span> */}
      </div>
      <div className='all-button-inner'>
           <div style={{width:"100%", maxWidth:"90px"}} className='button-inner-in'> 15 Days Plan</div>
          <div style={{width:"100%", maxWidth:"125px"}} className='button-inner-in'> Instant Download</div>
          <div style={{width:"100%", maxWidth:"160px"}}   className='button-inner-in'> Working Network TRC20</div>
      </div>
      <div className='button-100' style={{background:"blue", textAlign:"center", borderRadius:"20px", padding:"5px", marginTop:"40px", display:"flex",alignItems:"center",justifyContent:"center", gap:"5px"}}>100%    <RxLightningBolt style={{width:"15px"}}/>
      </div>
      <div style={{margin:"20px 0px", color:"#8BA0D2", lineHeight:"1.7rem"}}>You can download the QNEX Software after the payment.</div>
      <Link to="/OTC15DayPackage" style={{border:" 2px solid #fff", width:"140px", textAlign:"center", borderRadius:"50px", padding:"15px 10px", fontWeight:"bold", marginTop:"40px", marginBottom:"20px", textDecoration:"none", color:"#fff", }}>BUY NOW <FaRegMoneyBill1 />
  </Link>
      </div>
      <div >
    <div style={{ borderRadius: "20px", paddingBottom:"30px" }} className="tex-plan-mainner-1">
    <h1>How To Buy?</h1>
    <span style={{ color: "#9CA0D2", lineHeight:"1.7rem" }}>
      The first thing you need to do to Buy the Package to purchase our Most Trusted and Reliable Software. After purchasing the Package, you will be given a downloading link via email. You can download the software from there and after purchase for support you can connect with our team via 
      <span style={{ color: "blue" }}> Telegram Bot.</span>
    </span>
  </div>
  
       <div style={{ borderRadius: "20px",  paddingBottom:"50px" }} className="tex-plan-mainner-2">
    <h1>What can I do with it after I buy it?</h1>
    <span style={{ color: "#9CA0D2", lineHeight:"1.7rem" }}>
  After Buying the package you can download the software and then you can connect with our support team via    <span style={{ color: "blue" }}> Telegram Bot.</span>
    </span>
  </div>
      </div>
      </div>
      </div>
  )
}

export default PlanFiften