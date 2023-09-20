import React from "react";
import Navbar from "../../components/Navbar";
import header_main from "../../assets/landing-page/header-main.png";
import check_mark from "../../assets/landing-page/check-mark-circle-2.svg";
import ellipse1 from "../../assets/landing-page/Ellipse-1.svg";
import line1 from "../../assets/landing-page/Line-1.svg";
import whirlpool_logo from "../../assets/landing-page/Whirlpool-logo.png";
import tata_logo from "../../assets/landing-page/tata-logo.png";
import sony_logo from "../../assets/landing-page/Sony-logo.png";
import uber_logo from "../../assets/landing-page/uber-logo.png";
import airtel_logo from "../../assets/landing-page/airtel-logo.png";
import ibm_logo from "../../assets/landing-page/ibm-logo.png";
import ButtonPrimary from "../../components/ButtonPrimary";

const Header = () => {
  return (
    <div className="bg-blue-shade  relative">
      <Navbar />
      <div className="flex mt-[2rem] sm:mt-[5rem] px-0 sm:pl-[7.5rem] justify-between relative z-10">
        <div className="text-white sm:w-1/2 w-full sm:block flex flex-col gap-8 items-center justify-center">
          <div className="relative">
            <h1 className="px-[1.5rem] sm:px-0 text-center sm:text-left text-[3rem] sm:text-[5rem] font-[400] font-coolvetica-56 leading-[115%] m-0">
              Get Job-Ready <br />
              with us.
            </h1>
            <img
              src={line1}
              alt=""
              className="absolute sm:top-[50%] sm:right-[20%] w-[30%] right-1/4"
            />
          </div>
          <img
            src={header_main}
            alt=""
            className="sm:hidden block sm:w-auto  sm:mt-auto w-[90%]"
          />
          <p className="font-[400] text-center sm:text-left text-[1.25rem] font-poppins-regular-20 leading-[130%] sm:my-[3rem] m-0">
            Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a
            integer. Risus sapien nec volutpat ut lectus purus enim et a.
          </p>
         <ButtonPrimary text="Book Free Trial"/>
          <div className="font-[400] leading-[120%] font-poppins-regular-20 sm:block flex flex-col items-center">
            <div className="flex mt-4">
              <img src={check_mark} alt="" />
              <p className="m-1">7-day free trial</p>
            </div>
            <div className="flex">
              <img src={check_mark} alt="" />
              <p className="m-1">No credit card required</p>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex justify-center items-center">
          <img src={header_main} alt="" />
        </div>
      </div>
      <img
        src={ellipse1}
        alt=""
        className="sm:block hidden absolute bottom-0"
      />
      <div className="py-[2.5rem] relative z-10 flex flex-col justify-center items-center">
        <p className="font-[500] text-white leading-[130%] font-poppins-regular-20 text-[1.25rem] m-0">
          Get placed at
        </p>
        <div className="flex w-full items-center gap-10 sm:gap-[4rem] justify-center overflow-x-auto">
          <img src={whirlpool_logo} alt="" className="sm:w-auto w-1/5" />
          <img src={tata_logo} alt="" className="sm:w-auto w-1/5" />
          <img src={sony_logo} alt="" className="sm:w-auto w-1/5" />
          <img src={uber_logo} alt="" className="sm:w-auto w-1/5" />
          <img src={airtel_logo} alt="" className="sm:w-auto w-1/5" />
          <img src={ibm_logo} alt="" className="sm:w-auto w-1/5" />
        </div>
      </div>
    </div>
  );
};

export default Header;
