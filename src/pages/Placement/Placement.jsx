import React from "react";
import Header from "./Header";
import Benefits from "./Benefits";
import FooterSm from "../../components/FooterSm";
import Footer from "../../components/Footer";
import RegisterNow from "./RegisterNow";
import Testimonials from "./Testimonials";

const Placement = () => {
  return (
    <>
      <Header />
      <Benefits />
      <RegisterNow />
      <Testimonials />
      <Footer />
      <FooterSm />
    </>
  );
};

export default Placement;
