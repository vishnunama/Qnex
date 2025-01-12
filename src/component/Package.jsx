import React from 'react'
import "./Package.css"
import { Link } from 'react-router-dom'

function Package() {

  
  return (
    <div>
    <div className='package-iner-main' style={{display:"flex", background:"#14162C"}}>
        <div style={{display:"flex", gap: "20px"}}>
          <img style={{width:"100px",height:"100px"}} src="img/coin.png" alt="" />
          <div>
            <h2 className='font-heading-inner'>QNEX OTC DATA PACKAGE</h2>
            <span className="main-price-all">Best Price $49</span>
          </div>
        </div>
        <div className='plan-details' >
          <Link to="./PlanThree" style={{background:"#090a1b"}}  className='plan-text-in'> 3 days plan</Link>
          <Link to="./PlanThree" style={{background:"#090a1b"}} className='plan-text-in-1'>Instant Download</Link>
          <Link to="./PlanThree" style={{background:"#090a1b"}} className='plan-text-in'>Click Here</Link>
        </div>
    </div>
     <div className='package-iner-main' style={{display:"flex", background:"#14162C"}}>
        <div style={{display:"flex", gap: "20px"}}>
          <img style={{width:"100px",height:"100px"}} src="img/coin.png" alt="" />
          <div>
            <h2 className='font-heading-inner'>QNEX OTC DATA PACKAGE</h2>
            <span className='main-price-all'>
  <span className="strikethrough">99$</span> Best Price $79
</span>

          </div>
        </div>
        <div className='plan-details' >
          <Link  to="./PlanFive" style={{background:"#090a1b"}}  className='plan-text-in'> 5 days plan</Link>
          <Link to="./PlanFive" style={{background:"#090a1b"}} className='plan-text-in-1'>Instant Download</Link>
          <Link to="./PlanFive" style={{background:"#090a1b"}} className='plan-text-in'>Click Here</Link>
        </div>
    </div>
     <div className='package-iner-main' style={{display:"flex", background:"#14162C"}}>
        <div style={{display:"flex", gap: "20px"}}>
          <img style={{width:"100px",height:"100px"}} src="img/coin.png" alt="" />
          <div>
            <h2 className='font-heading-inner'>QNEX OTC DATA PACKAGE</h2>
           <span className='main-price-all'>
  <span className="strikethrough">199$</span> Best Price $120
</span>
          </div>
        </div>
        <div className='plan-details' >
          <Link to="./PlanFiften" style={{background:"#090a1b"}}  className='plan-text-in'> 15 days plan</Link>
          <Link to="./PlanFiften" style={{background:"#090a1b"}} className='plan-text-in-1'>Instant Download</Link>
          <Link to="./PlanFiften" style={{background:"#090a1b"}} className='plan-text-in'>Click Here</Link>
        </div>
    </div>
    </div>
  )
}

export default Package
