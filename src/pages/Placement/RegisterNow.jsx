import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import vector222 from "../../assets/placement/vector-222.svg";
import vector221 from "../../assets/landing-page/Vector-221.svg";
import vector_210 from "../../assets/landing-page/vector-210.svg";

const RegisterNow = () => {
  return (
    <div className="p-[1.5rem] sm:py-[5rem] flex flex-col justify-center items-center overflow-hidden">
      <h2 className=" m-0 text-[2.5rem] sm:text-[3.5rem] font-coolvetica-56 font-[400]">
        Register Now!
      </h2>
      <p className="w-[350px] lg:w-[auto] sm:text-[1.25rem] font-[400] text-text-medium sm:w-2/5 text-center font-poppins-regular-20 m-0 mt-8 mb-10 sm:mb-[4.25rem]">
        Begin your journey today or preview a sample profile. <br /> Your next
        career move awaits!
      </p>
      <div className="relative flex gap-6">
        <img
          src={vector222}
          alt=""
          className="absolute right-[10%] 2xl:right-[15%] bottom-[-3rem] -z-10 sm:block hidden"
        />
        <ButtonPrimary text="Apply Now" color="neon" />
        <span className="hidden sm:block">
          {/* <ButtonSecondary text="View Sample Profile" /> */}
          <ButtonPrimary text="View Sample Profile" primary={false} />
        </span>
        <img
          src={vector221}
          alt=""
          className="absolute bottom-[10%] left-[29rem] -z-10 sm:block hidden"
        />
      </div>
      <div className="sm:hidden block mt-6">
        {/* <ButtonSecondary text="View Sample Profile" /> */}
        <ButtonPrimary text="View Sample Profile" primary={false} />
      </div>
      <img src={vector_210} alt="" className="sm:hidden block " />
    </div>
  );
};

export default RegisterNow;
