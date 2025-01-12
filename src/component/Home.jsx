import React from 'react'
import { FaTelegram } from 'react-icons/fa'
import { BiMinus } from "react-icons/bi";
import Package from './Package';
import DataPackge from './DataPackge';
import HowItWork from './HowItWork';
import Faq from "./Faq"
import Thumb from "./Thumb";


function Home() {
  return (
<div>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"30px"}}>
        <div className='home-main-container'>
            <div  style={{marginBottom:"30px", color:"#0047FF", fontWeight:"bold", letterSpacing:"2px"}}>QNEX SOFTWARE</div>
            <div  className='main-inner-text' >
            Create  Your<a style={{color:"#0047FF"}}> Binary Trading</a>  Platform. 

            </div>
            <p style={{color:"#9CA0D2", padding:"0px 20px",fontSize:"1.3rem", lineHeight:"2rem"}}>
                ONEX delivers comprehensive OTC trading data to empower your investment decisions.
                 <span style={{color:"#f5f5f5"}}>24/7 expert support available</span>
                via Telegram for seamless assistance anytime you need it
            </p>   
                    <div style={{display:"flex", justifyContent:"center"}}>
                         <div style={{display:"flex", gap:"5px", border:"2px solid #fff", alignItems:"center", borderRadius:"50px", height:"3.1rem", padding:"0px 20px"}}>
                            <FaTelegram  />
                            <a className='font-telegram-1' style={{ textDecoration:"none", outline:"none", color:"#fff"}} href="https://t.me/+3lFtZHNgFks4NGM1" target='blank' >Telegram Channel </a>
                        </div>
                        </div>
        </div>
    </div>

   <div className='packge-inner' >
    <div>
      <div style={{ display: "flex", alignItems: "center" , gap:"40px" }}>
        <div style={{color:'#0047FF', letterSpacing:"2px", fontWeight:"600"}}>QNEX PACKAGE</div>
        <BiMinus size={50} color='#0047FF' />
      </div>
      <h1 className='Select-Your-heading' >Select Your Package With New Year's Discounts</h1>
      </div>
    </div>

    <Package/>
    <DataPackge/>
    <HowItWork/>
    <Faq />
    <Thumb />




    </div>
  )
}

export default Home