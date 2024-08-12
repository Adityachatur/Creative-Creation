import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbars/Navbar";
import HeadingPgae from "./Components/Head/HeadingPgae";
import Service from "./Components/Head/Service";
import WhatWeDo from "./Components/Head/WhatWeDo";
import Portfolio from "./Components/Head/Portfolio";
import Marquee from "./Components/Head/Marqu";
import BestCustomer from "./Components/Head/BestCustomer";
import Features from "./Components/Head/Features";
import PricePlan from "./Components/Head/PricePlan";
import Testomonials from "./Components/Head/Testomonials";
import Clients from "./Components/Head/Clients";
import GetInTouch from "./Components/Head/GetInTouch";
import Footer from "./Components/Navbars/Footer";
import ScrollToTop from "./Components/SubPages/ScrollToTop";

const App = () => {
  useEffect(() => {
    Aos.init({
      once: false,
    });
  }, []);
  return (
    <>
      <Navbar />
      <div id="headingPage">
        <HeadingPgae />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="whatWeDo">
        <WhatWeDo />
      </div>
      <Portfolio />
      <Marquee />
      <BestCustomer />
      <Features />
      <PricePlan />
      <div id="testimonials">
        <Testomonials />
      </div>
      <Clients />
      <div id="getInTouch">
        <GetInTouch />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
