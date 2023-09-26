import whyus1 from "../../assets/hire/whyus1.svg";
import whyus2 from "../../assets/hire/whyus2.svg";
import whyus3 from "../../assets/hire/whyus3.svg";
import ButtonPrimary from "../../components/ButtonPrimary";
import line11 from "../../assets/hire/line11.svg";

const WhyUs = () => {
  return (
    <div className="bg-blue-shade text-center flex flex-col justify-center items-center px-[1.5rem] py-[2.5rem]  sm:p-[5rem] mt-[5rem]">
      <p className="font-[400] text-[1.5rem] font-coolvetica-56 text-neon sm:m-auto m-0">
        Why us?
      </p>
      <h2 className="font-[400] text-[2.5rem] sm:text-[3.5rem] font-coolvetica-56 m-0">
        <span className="text-white">The world is changing—And so is </span>
        <span className="text-neon relative">
          hiring!
          <img
            src={line11}
            alt=""
            className="absolute bottom-[-6px] left-[-9px] sm:left-[10px]"
          />
        </span>
      </h2>
      <p className="text-white font-[500] leading-[130%] text-[1.25rem] font-poppins-regular-20 text-center sm:w-[60%] mt-[4rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim{" "}
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 my-[4rem]">
        <div className="flex flex-col items-center justify-center px-8">
          <img src={whyus1} alt="" />
          <div className="text-white text-center mt-8">
            <h3 className="font-[500] text-[1.5rem] font-poppins-regular-20">
              Remote or Hybrid
            </h3>
            <p className="mt-[1.25rem] font-[400] leading-[120%] font-poppins-regular-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt utl
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-8">
          <img src={whyus2} alt="" />
          <div className="text-white text-center mt-8">
            <h3 className="font-[500] text-[1.5rem] font-poppins-regular-20">
              Mentorship
            </h3>
            <p className="mt-[1.25rem] font-[400] leading-[120%] font-poppins-regular-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt utl
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-8">
          <img src={whyus3} alt="" />
          <div className="text-white text-center mt-8">
            <h3 className="font-[500] text-[1.5rem] font-poppins-regular-20">
              Manage Easily
            </h3>
            <p className="mt-[1.25rem] font-[400] leading-[120%] font-poppins-regular-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt utl
            </p>
          </div>
        </div>
      </div>
      <ButtonPrimary text="Hire Now" />
    </div>
  );
};

export default WhyUs;
