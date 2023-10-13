import React from "react";

const WhyUsCard = ({ img, heading, text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={img} alt="" className="sm:w-auto w-[30%]" />
      <div className="mt-6 leading-[120%] font-poppins-regular-20 text-center">
        <h4 className=" text-text-dark font-[500] text-[1.5rem] m-0">
          {heading}
        </h4>
        <p className="md:leading-snug xl:w-[75%] w-[90%] mx-auto  mt-4 sm:px-[5%]  sm:text-[1rem] text-[14px] font-[400] text-text-medium">
          {text}
        </p>
      </div>
    </div>
  );
};

export default WhyUsCard;
