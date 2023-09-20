import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import vector221 from "../../assets/Landing-page/vector-221.svg";
import vector222 from "../../assets/Landing-page/vector-222.svg";

const RegisterNow = () => {
  return (
    <div className="py-[5rem] flex flex-col justify-center items-center overflow-hidden">
      <h2 className=" m-0 text-[3.5rem] font-coolvetica-56 font-[400]">
        Register Now!
      </h2>
      <p className="text-[1.25rem] font-[400] text-text-medium w-2/5 text-center font-poppins-regular-20 m-0 mt-8 mb-[4.25rem]">
        Begin your journey today or preview a sample profile. Your next career
        move awaits!
      </p>
      <div className="relative">
        <img
          src={vector222}
          alt=""
          className="absolute right-[44%] bottom-[-4rem] -z-10"
        />
        <ButtonPrimary text="Book Free Trial" />
        <img src={vector221} alt="" className="absolute bottom-0 -z-10" />
      </div>
    </div>
  );
};

export default RegisterNow;
