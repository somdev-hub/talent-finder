import React from "react";
import user_icon from "../assets/solar_user-bold.svg";

const Loader = () => {
  React.useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  }, []);
  return (
    <div className="flex  flex-col sm:w-[28rem] h-screen justify-center sm:m-auto items-center mt-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[7rem] h-[7rem] rounded-full bg-[#5C27C0] flex items-center justify-center">
          <img src={user_icon} alt="" />
        </div>
      </div>
      <div className="mt-[3rem] sm:mt-[5rem] mb-[3rem]">
        <h3 className="text-[1.5rem] sm:text-[2rem] font-[700] font-poppins-regular-20 text-center m-0">
          Congratulations!
        </h3>
        <p className="font-[400] text-[1rem] sm:text-[1.5rem] text-center font-poppins-regular-20 m-0 mt-4">
          Your account is ready to use. You will be redirected to the Home page
          in a few seconds
        </p>
      </div>
      <div className="">
        <span className="loader block"></span>
      </div>
    </div>
  );
};

export default Loader;
