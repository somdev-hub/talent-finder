import React from "react";
import Header from "./Header";
import WhyUs from "./WhyUs";
import HowItWorks from "./HowItWorks";
import WhatWillIGet from "./WhatWillIGet";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import RegisterNow from "./RegisterNow";
import FooterSm from "./FooterSm";

const LandingPage = () => {
  return (
    <>
      <Header />
      <WhyUs />
      <HowItWorks />
      <WhatWillIGet />
      <Testimonials />
      <RegisterNow />
      <Footer />
      <FooterSm />
    </>
  );
};

export default LandingPage;
