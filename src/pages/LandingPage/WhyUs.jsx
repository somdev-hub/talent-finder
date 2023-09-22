import WhyUsCard from "../../components/WhyUsCard";
import circle1 from "../../assets/landing-page/circle1.svg";
import { whyUsSlides } from "../../assets/data/whyUs";

const WhyUs = () => {
  return (
    <div className="mt-10 sm:mt-[5rem] flex text-center flex-col justify-center items-center">
      <p className="text-[1.5rem] font-[400] font-coolvetica-56 text-blue m-0">
        Why us?
      </p>
      <div className="relative">
        <h2 className="m-0 mt-8 text-[2rem] sm:text-[3.5rem] font-coolvetica-56 font-[400]">
          We'll guide you to your perfect placement.
        </h2>
        <img
          src={circle1}
          alt=""
          className="absolute sm:top-[35%] sm:right-[26%] sm:w-auto w-1/4 bottom-[8%] sm:left-auto left-[15%]"
        />
      </div>
      <div className="flex sm:flex-row flex-col gap-10 mt-[4rem] w-[80%]">
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
