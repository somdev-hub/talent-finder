import React, { useState } from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import register_now1 from "../../assets/hire/register-now1.svg";

const RegisterNow = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <div className="px-[1.5rem] py-[2.5rem] sm:p-[5rem] text-center sm:mb-auto mb-[3rem]">
      <h2 className="w-[312px] sm:w-auto text-center text-[2rem] sm:text-[3.5rem] font-[400] font-coolvetica-56 m-0 mx-auto">
        <span className="text-text-dark">Hire your first </span>
        <span className="text-blue-shade">top-rated </span>
        <span className="text-text-dark">Indian without any hassle.</span>
      </h2>
      <p className="mb-[3rem] sm:mb-[4rem] font-[400] text-[1.25rem] font-poppins-regular-20 text-text-medium m-0 mt-8 leading-[130%]">
        and we understand your <br className="block sm:hidden" /> requirements
        better!
      </p>
      <div className="relative w-fit  m-auto">
        <ButtonPrimary text="Hire Now" color="neon" />
        <img
          src={register_now1}
          className="absolute z-20 sm:bottom-[-13px] bottom-[-2.5rem] right-[40%] cursor-pointer"
          alt=""
          style={{ display: showScrollToTop ? "block" : "none" }}
          onClick={handleScrollToTop}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default RegisterNow;
