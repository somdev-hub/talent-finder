import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import vector221 from "../../assets/landing-page/Vector-221.svg";
import vector222 from "../../assets/landing-page/Vector-222.svg";
import ButtonSecondary from "../../components/ButtonSecondary";

const RegisterNow = () => {
  return (
    <div className="p-[1.5rem] sm:py-[5rem] flex flex-col justify-center items-center overflow-hidden">
      <h2 className=" m-0 text-[2.5rem] sm:text-[3.5rem] font-coolvetica-56 font-[400]">
        Register Now!
      </h2>
      <p className="text-[1.25rem] font-[400] text-text-medium sm:w-2/5 text-center font-poppins-regular-20 m-0 mt-8 mb-10 sm:mb-[4.25rem]">
        Begin your journey today or preview a sample profile. Your next career
        move awaits!
      </p>
      <div className="relative">
        <img
          src={vector222}
          alt=""
          className="absolute right-[44%] bottom-[-4rem] -z-10 sm:block hidden"
        />
        <ButtonPrimary text="Book Free Trial" />
        <img
          src={vector221}
          alt=""
          className="absolute bottom-0 left-[12rem] -z-10 sm:block hidden"
        />
      </div>
      <div className="sm:hidden block mt-6">
        <ButtonSecondary text="View Sample Profile" />
      </div>
    </div>
  );
};

export default RegisterNow;
