import React from "react";
import { Header } from "./Header";
import WhyUs from "./WhyUs";
import Steps from "./Steps";
import RegisterNow from "./RegisterNow";
import Layout from "../../components/common/Layout";

const Hire = () => {
  return (
    <Layout color="blue">
      <Header />
      <WhyUs />
      <Steps />
      <RegisterNow />
    </Layout>
  );
};

export default Hire;
