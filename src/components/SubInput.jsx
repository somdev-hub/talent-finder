import React, { useRef } from "react";
import asterisk from "../assets/BookFreeTrial/asterisk.png";
import attachment from "../assets/attachment.svg";

const SubInput = ({ label, onChange, type, required, name }) => {
  const fileRef = useRef(null);

  const handleFileClick = () => {
    fileRef.current.click();
  };
  return (
    <div className="flex flex-col w-full relative">
      <label
        htmlFor="input"
        className="text-text-medium leading-[130%] font-poppins-regular-20 text-[12px] md:text-[1rem] xl:text-[1.25rem] font-[500] flex absolute top-[-9px] left-[12px] sm:left-[25px] bg-white px-2"
      >
        {label}
        {required && (
          <img
            src={asterisk}
            alt=""
            className="w-[9px] sm:w-[13px] h-[9px] sm:h-[13px] ml-[5px] flex"
          />
        )}
      </label>
      <img
        src={attachment}
        alt=""
        onClick={handleFileClick}
        className={`${
          type === "file" ? "block" : "hidden"
        } w-[25px] absolute top-[28%] right-[25px] cursor-pointer`}
      />
      <input
        id="input"
        type={type ? type : "text"}
        required={true}
        name={name}
        ref={fileRef}
        onChange={onChange}
        className="text-[14px] sm:text-[1rem] font-poppins-regular-20 p-[8px] sm:p-4 pl-[12px] sm:pl-[25px] box-border border-2 border-solid border-text-light rounded-full inline-block"
      />
    </div>
  );
};

export default SubInput;
