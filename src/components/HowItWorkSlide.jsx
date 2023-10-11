import React from "react";

const HowItWorkSlide = ({ heading, text, img }) => {
  return (
    <div className="p-4 text-center sm:text-left md:p-8 xl:p-[4rem] box-border flex xl:flex-row flex-col sm:gap-8 gap-6 border-[2px] border-solid border-text-light">
      <div className="w-auto xl:w-1/2 md:text-center xl:text-left">
        <h3 className="text-[2.25rem] sm:text-[2.5rem] m-0 font-[400] font-coolvetica-56">
          {heading}
        </h3>
        <p className="w-[90%] mx-auto sm:mx-0 sm xl:w-[93%] text-[1rem] sm:text-[1rem] leading-[130%] font-[400] font-poppins-regular-20 text-text-medium">
          {text}
        </p>
      </div>
      <div className="w-auto xl:w-1/2">
        <img src={img} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default HowItWorkSlide;
