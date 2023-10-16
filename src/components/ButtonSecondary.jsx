import React from "react";

const ButtonSecondary = ({ text }) => {
  return (
    <div className="relative z-10 inline-flex py-[14px] px-[2rem] items-center justify-center rounded-[2.5rem] border-solid border-[4px] border-neon bg-white font-poppins-regular-20 font-[500] leading-[130%] text-[1.25rem] box-border cursor-pointer">
      {text}
    </div>
  );
};

export default ButtonSecondary;
