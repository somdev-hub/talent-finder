import React from "react";

const WhatWillIgetCard = ({ img, heading, text }) => {
  return (
    <div className="md:py-4 xl:py-[3rem] sm:px-6 flex flex-col justify-center items-center text-center">
      <img src={img} alt="" className="w-[4.5rem] h-[4.5rem]" />
      <div className="mt-6">
        {/* added text-color */}
        <h3 className="text-[#202020] text-[1.5rem] font-[500] font-poppins-regular-20 leading-[120%] m-0 sm:m-auto mb-6 sm:mb-auto">
          {heading}
        </h3>
        {/* added width and text color*/}
        <p className="text-[#4b4b4b] w-[342px] lg:w-[275px] xl:w-auto text-[#4B4B4B ] mt-4 font-[400] font-poppins-regular-20 leading-[120%] text-[14px] sm:text-[1rem]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default WhatWillIgetCard;
