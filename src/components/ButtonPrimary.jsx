import React from "react";
import { Link } from "react-router-dom";

const ButtonPrimary = ({ text, link, onclick }) => {
  return (
    // fixed bg and text color
    <Link to={link}>
      <button
        className="relative z-10 rounded-[2.5rem] bg-[var(--neon,#BEEB42)] inline-flex py-[14px] px-[2rem] justify-center items-center text-[var(--text-dark,#202020)] text-[1.25rem] font-[500] leading-[130%] font-poppins-regular-20 cursor-pointer"
        onClick={onclick}
      >
        {text}
      </button>
    </Link>
  );
};

export default ButtonPrimary;
