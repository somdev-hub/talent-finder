import WhyUsCard from "../../components/WhyUsCard";
import circle1 from "../../assets/landing-page/circle1.svg";
import circle1_sm from "../../assets/landing-page/circle1-sm.svg";
import { whyUsSlides } from "../../assets/data/whyUs";

const WhyUs = () => {
  return (
    <div className=" sm:px-auto py-[2.5rem] sm:py-auto sm:mt-[5rem] flex text-center flex-col justify-center items-center">
      <p className=" text-[1.5rem] font-[400] font-coolvetica-56 text-[var(--blue,#6D38FB)] m-0">
        Why us?
      </p>
      <div className="relative">
      {/* Fixed bugs Added  width  */}
        <h2 className="w-[382px] sm:w-auto relative sm:static z-10 m-0 mt-6 sm:mt-8 text-[2rem] lg:text-[3.5rem] font-coolvetica-56 font-[400] leading-[34px] text-[var(--text-dark,#202020)]">
          We'll guide you to your perfect placement.
        </h2>
        <img
          src={circle1}
          alt=""
          className="hidden sm:block absolute lg:top-[23%] md:top-[20%] md:right-[5%] lg:right-[26.3%] sm:w-auto w-1/4 bottom-[8%] sm:left-auto left-[15%]"
        />
        <img
          src={circle1_sm}
          alt=""
          className="sm:hidden block absolute w-[33%] bottom-[12%] left-[12%]"
        />
      </div>
      <div className="flex lg:flex-row flex-col gap-6 sm:gap-10 mt-10 sm:mt-[4rem] sm:w-[80%] lg:w-full xl:w-[80%]">
        {whyUsSlides.map((item, index) => {
          return (
            <WhyUsCard
              img={item.img}
              heading={item.heading}
              text={item.text}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WhyUs;
