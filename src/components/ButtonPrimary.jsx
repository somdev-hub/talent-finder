import React from "react";

const ButtonPrimary = ({ text }) => {
  return (
    <button className="relative z-10 rounded-[2.5rem] bg-neon inline-flex py-[14px] px-[2rem] justify-center items-center text-[1.25rem] font-[500] leading-[130%] font-poppins-regular-20 cursor-pointer">
      {text}
    </button>
  );
};

export default ButtonPrimary;
