import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import register_now1 from "../../assets/hire/register-now1.svg";

const RegisterNow = () => {
  return (
    <div className="px-[1.5rem] py-[2.5rem] sm:p-[5rem] text-center sm:mb-auto mb-[3rem]">
      <h2 className=" text-[2rem] sm:text-[3.5rem] font-[400] font-coolvetica-56 m-0">
        <span className="text-text-dark">Hire your first </span>
        <span className="text-blue-shade">top-rated </span>
        <span className="text-text-dark">Indian without any hassle.</span>
      </h2>
      <p className="mb-[3rem] sm:mb-[4rem] font-[400] text-[1.25rem] font-poppins-regular-20 text-text-medium m-0 mt-8">
        and we understand your requirements better!
      </p>
      <div className="relative w-fit  m-auto">
        <ButtonPrimary text="Hire Now" />
        <img
          src={register_now1}
          className="absolute sm:bottom-[-13px] bottom-[-4rem] right-[40%]"
          alt=""
        />
      </div>
    </div>
  );
};

export default RegisterNow;
