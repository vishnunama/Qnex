import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./component/Home";
import Header from "./component/Header";
import PlanThree from "./component/PlanThree";
import PlanFive from "./component/PlanFive";
import PlanFiften from "./component/PlanFiften";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";
import OTC3DayPackage from "./component/OTC3DayPackage";
import PayToTrc20 from "./component/payment details/PayToTrc20";
import PayToBep20 from "./component/payment details/PayToBep20";
import PayTobtc from "./component/payment details/PayToBtc";
import OTC5DayPackage from "./component/OTC5DayPackage";
import OTC15DayPackage from "./component/OTC15DayPackage";

const Layout = ({ children }) => {
  const location = useLocation();

  // Hide Header and Footer for OTC3DayPackage and OTC5DayPackage
 const hideHeaderAndFooter = 
  location.pathname.startsWith("/OTC3DayPackage") || 
  location.pathname.startsWith("/OTC5DayPackage") || 
  location.pathname.startsWith("/OTC15DayPackage");

  return (
    <>
      {!hideHeaderAndFooter && <Header />}
      <ScrollToTop />
      {children}
      {!hideHeaderAndFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/PlanThree" element={<PlanThree />} />
          <Route path="/PlanFive" element={<PlanFive />} />
          <Route path="/PlanFiften" element={<PlanFiften />} />

          {/* Nested Routes under OTC3DayPackage */}
          <Route path="/OTC3DayPackage" element={<OTC3DayPackage />} />
          <Route path="/OTC5DayPackage" element={<OTC5DayPackage />} />
          <Route path="/OTC15DayPackage" element={<OTC15DayPackage />} />

                    


          <Route path="/OTC3DayPackage/PayToTrc20" element={<PayToTrc20 />} />
          <Route path="/OTC3DayPackage/PayToBep20" element={<PayToBep20 />} />
          <Route path="/OTC3DayPackage/PayTobtc" element={<PayTobtc />} />

          <Route path="/OTC5DayPackage/PayToTrc20" element={<PayToTrc20 />} />
          <Route path="/OTC5DayPackage/PayToBep20" element={<PayToBep20 />} />
          <Route path="/OTC5DayPackage/PayTobtc" element={<PayTobtc />} />

          <Route path="/OTC15DayPackage/PayToTrc20" element={<PayToTrc20 />} />
          <Route path="/OTC15DayPackage/PayToBep20" element={<PayToBep20 />} />
          <Route path="/OTC15DayPackage/PayTobtc" element={<PayTobtc />} />



          



        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
