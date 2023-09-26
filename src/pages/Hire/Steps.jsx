import React from "react";
import steps1 from "../../assets/hire/steps1.svg";
import steps2 from "../../assets/hire/steps2.svg";
import steps3 from "../../assets/hire/steps3.svg";
import steps4 from "../../assets/hire/steps4.svg";

const Steps = () => {
  return (
    <div className="px-[1.5rem] py-[2.5rem]  sm:p-[5rem] flex flex-col items-center justify-center text-center">
      <h2 className=" text-[2rem] sm:text-[3.5rem] font-[400] font-coolvetica-56 m-0">
        <span className="text-text-dark">Top-quality remote hiring in </span>
        <span className="text-blue-shade">4 simple steps</span>
      </h2>
      <p className="font-[400] text-[1.25rem] font-poppins-regular-20 text-text-medium m-0 mt-8">
        Begin your journey today or preview a sample profile. <br />
        Your next career move awaits!
      </p>
      <div className="flex sm:flex-row flex-col gap-[3.5rem] mt-[4rem]">
        <div className="flex flex-col items-center justify-center gap-[1rem]">
          <img src={steps1} alt="" />
          <h3 className="text-[1.5rem] font-[500] font-poppins-regular-20 leading-[120%] m-0">
            List requirements
          </h3>
          <p className="font-[400] leading-[120%] font-poppins-regular-20 m-0">
            Our team will contact you to understand your requirements. Our team
            will contact you to.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-[1rem]">
          <img src={steps2} alt="" />
          <h3 className="text-[1.5rem] font-[500] font-poppins-regular-20 leading-[120%] m-0">
            List requirements
          </h3>
          <p className="font-[400] leading-[120%] font-poppins-regular-20 m-0">
            Our team will contact you to understand your requirements. Our team
            will contact you to.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-[1rem]">
          <img src={steps3} alt="" />
          <h3 className="text-[1.5rem] font-[500] font-poppins-regular-20 leading-[120%] m-0">
            List requirements
          </h3>
          <p className="font-[400] leading-[120%] font-poppins-regular-20 m-0">
            Our team will contact you to understand your requirements. Our team
            will contact you to.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-[1rem]">
          <img src={steps4} alt="" />
          <h3 className="text-[1.5rem] font-[500] font-poppins-regular-20 leading-[120%] m-0">
            List requirements
          </h3>
          <p className="font-[400] leading-[120%] font-poppins-regular-20 m-0">
            Our team will contact you to understand your requirements. Our team
            will contact you to.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
