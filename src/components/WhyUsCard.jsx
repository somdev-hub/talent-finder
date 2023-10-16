import React from "react";

const WhyUsCard = ({ img, heading, text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={img} alt="" className="sm:w-auto w-[30%]" />
      <div className="mt-6 leading-[120%] font-poppins-regular-20 text-center">
     {/* fixed bugs added text color matched with figma */}
        <h4 className=" text-[var(--text-dark,#202020)] font-[500] text-[1.5rem] m-0">
          {heading}
        </h4>
        {/* fixed width size in mobile view and text color */}
        <p className="md:leading-snug w-[80%] sm:w-[83%] xl:w-[75%] mx-auto  mt-4 sm:px-[5%] sm:text-[1rem] text-[14px] font-[400] text-[var(--text-medium,#4B4B4B)]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default WhyUsCard;
