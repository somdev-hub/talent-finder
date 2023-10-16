import React from "react";

const ButtonPrimary = ({ text }) => {
  return (
    // fixed bg and text color
    <button className="relative z-10 rounded-[2.5rem] bg-[var(--neon,#BEEB42)] inline-flex py-[14px] px-[2rem] justify-center items-center text-[var(--text-dark,#202020)] text-[1.25rem] font-[500] leading-[130%] font-poppins-regular-20 cursor-pointer">
      {text}
    </button>
  );
};

export default ButtonPrimary;
