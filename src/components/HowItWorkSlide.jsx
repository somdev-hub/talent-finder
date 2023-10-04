import React from "react";

const HowItWorkSlide = ({ heading, text, img }) => {
  return (
    <div className="p-4 text-center sm:text-left sm:p-[4rem] box-border flex sm:flex-row flex-col sm:gap-8 gap-6 border-[2px] border-solid border-text-light">
      <div className="w-auto sm:w-1/2 sm:text-left">
        <h3 className="text-[2.25rem] sm:text-[2.5rem] m-0 font-[400] font-coolvetica-56">
          {heading}
        </h3>
        <p className="sm:w-[93%] text-[1.25rem] sm:text-[1rem] leading-[130%] font-[400] font-poppins-regular-20 text-text-medium">
          {text}
        </p>
      </div>
      <div className="w-auto sm:w-1/2">
        <img src={img} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default HowItWorkSlide;
