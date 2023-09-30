import React from "react";
import benifits_main from "../../assets/placement/benifits-main.svg";
import highlight_6 from "../../assets/placement/highlight-6.svg";
import { benefits } from "../../assets/data/benefits";

const Benefits = () => {
  return (
    <div className="p-[1.5rem] md:p-[3rem] lg:p-[5rem] mt-[2rem] sm:mt-auto flex flex-col items-center justify-center ">
      <div className="relative">
        <h2 className="text-[2.2rem] sm:text-[3.5rem] font-[400] font-coolvetica-56 m-0 text-center">
          <span className="text-text-dark">
            Jobs + Benefits <br className="sm:hidden block w-[15%] sm:w-auto" />{" "}
            ={" "}
          </span>
          <span className="text-blue-shade">Your Success !</span>
        </h2>
        <img
          src={highlight_6}
          alt=""
          className="absolute right-[-15px] sm:right-[2px] top-[-1rem] sm:w-auto w-[15%] sm:top-[-1.5rem]"
        />
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-8 mt-10 sm:mt-[6rem] items-center justify-center">
        <img src={benifits_main} alt="" className="w-4/5" />
        <div className="">
          <p className="sm:block hidden text-[1.5rem] font-[400] leading-[115%] font-poppins-regular-20 m-0">
            Are you on the hunt for your dream job? <br /> Here's why you should
            take advantage of our platform:
          </p>
          <div className="flex flex-col sm:grid grid-cols-2 grid-rows-2 sm:gap-10 mt-5 sm:text-left text-center">
            {benefits.map((benefit, index) => {
              return (
                <div key={index} className="font-poppins-regular-20 mb-6">
                  <h3 className="text-[1.5rem] font-[500] leading-[120%] text-blue sm:m-auto m-0">
                    {benefit.title}
                  </h3>
                  <p className="sm:pr-[25%] font-[400] leading-[120%] sm:text-[1rem] text-[14px] text-text-medium">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
