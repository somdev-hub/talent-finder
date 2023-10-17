import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FooterSm from "../FooterSm";

const Layout = ({ children, color }) => {
  return (
    <div>
      <div className="">
        <Navbar color={color} />
        <div className="">{children}</div>
        <Footer />
        <FooterSm />
      </div>
    </div>
  );
};

export default Layout;
