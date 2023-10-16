import React from "react";
import Header from "./Header";
import WhyUs from "./WhyUs";
import HowItWorks from "./HowItWorks";
import WhatWillIGet from "./WhatWillIGet";
import Testimonials from "./Testimonials";
import RegisterNow from "./RegisterNow";
import Footer from "../../components/Footer";
import FooterSm from "../../components/FooterSm";

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
