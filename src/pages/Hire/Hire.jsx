import React from "react";
import { Header } from "./Header";
import WhyUs from "./WhyUs";
import Footer from "../../components/Footer";
import FooterSm from "../../components/FooterSm";
import Steps from "./Steps";
import RegisterNow from "./RegisterNow";

const Hire = () => {
  return (
    <>
      <Header />
      <WhyUs />
      <Steps />
      <RegisterNow  />
      <Footer />
      <FooterSm />
    </>
  );
};

export default Hire;
