import React, { useState } from "react";
import "./Faq.css";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ textAlign: "center" , margin:"20px" }}>
      <div style={{ color: "#0047FF", letterSpacing: "2px" }}>FAQ</div>
      <h1>Frequently Asked Questions</h1>
      <div style={{ color: "#9CA0D2" }}>
        We answer frequently asked questions about society for you.
      </div>

      <div className="faq-container">
        {/* Question 1 */}
        <div
          className={`faq-item ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => toggleAnswer(0)}
          style={{
            textAlign:"left",
            background: "linear-gradient(291deg, #0146FE 55%, #520790 100%)",
            color: "white",
            padding: "25px",
            borderRadius: "50px",
            cursor: "pointer",
            marginBottom: "20px",
             fontSize:"1rem"
          }}
        >
          How do I buy the tool?
        </div>
        {activeIndex === 0 && (
          <div style={{ color: "#9CA0D2", padding:"10px 20px 30px 20px",textAlign:"left",  lineHeight:"1.7rem" }}>
            You can <span style={{color:"blue"}}> purchase</span> the package you want from our bulk website by
            clicking on the purchase option. First of all, select the <span style={{color:"blue"}}>QNEX
            package</span> you want and click the buy now button. After you make your
            payment online, you can activate your license via our telegram bot
            with the license code sent to your email. All license codes are
            valid for 1 month.
          </div>
        )}

        {/* Question 2 */}
        <div
          className={`faq-item ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => toggleAnswer(1)}
          style={{
            textAlign:"left",
            background: "linear-gradient(291deg, #0146FE 55%, #520790 100%)",
            color: "white",
            padding: "25px",
            borderRadius: "50px",
            cursor: "pointer",
            marginBottom: "20px",
            fontSize:"1rem"
          }}
        >
          Do you Offer Demos?
        </div>
        {activeIndex === 1 && (
          <div style={{ color: "#9CA0D2", padding:"10px 20px 30px 20px",textAlign:"left" , lineHeight:"1.8rem" }}>
            Unfortunately, we do not offer demos due to high costs. We offer a
            package for trial. You can try the <span style={{color:"blue"}}>starter package</span> worth $49 with
            New Year Discount.
          </div>
        )}

        {/* Question 3 */}
        <div
          className={`faq-item ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => toggleAnswer(2)}
          style={{
            background: "linear-gradient(291deg, #0146FE 55%, #520790 100%)",
            color: "white",
            // textAlign:"left",
            padding: "25px",
            textAlign:"left",
            borderRadius: "50px",
            cursor: "pointer",
            marginBottom: "20px",
             fontSize:"1rem"
          }}
        >
          How long does it software work?
        </div>
        {activeIndex === 2 && (
          <div style={{ color: "#9CA0D2", padding:"10px 20px 30px 20px",textAlign:"left" , lineHeight:"1.8rem" }}>
            This depends on the package you buy.
          </div>
        )}
      </div>
    </div>
  );
}

export default Faq;
