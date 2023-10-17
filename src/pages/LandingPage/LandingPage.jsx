import React from "react";
import Header from "./Header";
import WhyUs from "./WhyUs";
import HowItWorks from "./HowItWorks";
import WhatWillIGet from "./WhatWillIGet";
import Testimonials from "./Testimonials";
import RegisterNow from "./RegisterNow";
import Layout from "../../components/common/Layout";

const LandingPage = () => {
  return (
    <Layout>
      <Header />
      <WhyUs />
      <HowItWorks />
      <WhatWillIGet />
      <Testimonials />
      <RegisterNow />
    </Layout>
  );
};

export default LandingPage;
