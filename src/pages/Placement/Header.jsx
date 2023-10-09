import Navbar from "../../components/Navbar";
import header_main from "../../assets/placement/placement-header.png";
import check_mark from "../../assets/landing-page/check-mark-circle-2.svg";
import line1 from "../../assets/landing-page/Line-1.svg";
import whirlpool_logo from "../../assets/landing-page/Whirlpool-logo.png";
import tata_logo from "../../assets/landing-page/tata-logo.png";
import sony_logo from "../../assets/landing-page/Sony-logo.png";
import uber_logo from "../../assets/landing-page/uber-logo.png";
import airtel_logo from "../../assets/landing-page/airtel-logo.png";
import ibm_logo from "../../assets/landing-page/ibm-logo.png";
import ButtonPrimary from "../../components/ButtonPrimary";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ellipse15 from "../../assets/placement/ellipse-15.svg";
import hightlight4 from "../../assets/placement/highlight-4.svg";

const Header = () => {
  const images = [
    whirlpool_logo,
    tata_logo,
    sony_logo,
    uber_logo,
    airtel_logo,
    ibm_logo
  ];
  return (
    <div className="bg-blue-shade relative sm:h-screen overflow-hidden">
      <Navbar />
      <div className="flex mt-[2rem] px-6 sm:px-0 sm:mt-[3rem] md:px-[3.5rem] lg:px-[7.5rem] justify-between sm:flex-col lg:flex-row relative z-10">
        <div className="text-white xl:w-1/2 w-full xl:block flex flex-col gap-8 items-center justify-center">
          <div className="relative">
            <h1 className="px-[1.5rem] sm:px-0 text-center xl:text-left sm:text-center text-[2.5rem] sm:text-[5rem] font-[400] font-coolvetica-56 leading-[115%] m-0">
              Get Placed in top <br className="sm:block hidden" /> companies.
            </h1>
            <img
              src={hightlight4}
              alt=""
              className="absolute sm:top-0 sm:right-0 left-[1%] bottom-[40%] sm:bottom-auto sm:left-auto "
            />
          </div>
          <img
            src={header_main}
            alt=""
            className="sm:hidden block sm:w-auto  sm:mt-auto w-[85%]"
          />
          <p className="font-[400] text-center xl:text-left text-[1rem] sm:text-[1.25rem] font-poppins-regular-20 leading-[130%] md:my-4 xl:my-[3rem] m-0">
            Lorem ipsum dolor sit amet <br className="sm:hidden block" />{" "}
            consectetur. Ac ut nunc <br className="hidden sm:block" /> sodales a
            <br className="sm:hidden block" /> integer. Risus sapien nec
            volutpat ut
            <br className="sm:hidden block" /> lectus{" "}
            <br className="hidden sm:block" /> purus enim et a.
          </p>
          <ButtonPrimary text="Apply Now" />
        </div>
        <div className="hidden sm:flex justify-center items-center">
          <img
            src={header_main}
            alt=""
            className="flex items-center justify-center"
          />
        </div>
      </div>
      <img
        src={ellipse15}
        alt=""
        className="xl:block hidden absolute bottom-[-8%] right-0"
      />
      <div className="py-[2.5rem] relative z-10 flex flex-col justify-center items-center">
        <p className="font-[500] text-white leading-[130%] font-poppins-regular-20 text-[1.25rem] m-0">
          Get placed at
        </p>
        <div className="sm:hidden flex w-full items-center gap-10 sm:gap-[4rem] justify-center overflow-x-auto">
          <div className="w-[100%] flex items-center justify-center m-auto">
            <Swiper
              className="mySwiper"
              modules={[Autoplay]}
              autoplay={true}
              slidesPerView={4}
              loop={true}
              centeredSlides={true}
            >
              {images.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="flex items-center my-auto  justify-center h-[3rem] sm:h-[5rem]">
                      <img
                        src={image}
                        alt=""
                        className="sm:w-auto w-[4rem] m-0 h-auto object-contain"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="hidden sm:flex w-full items-center gap-[4rem] justify-center overflow-x-auto">
          <div className="md:w-[90%] lg:w-[80%] flex items-center justify-around">
            <img
              src={whirlpool_logo}
              alt=""
              className="md:w-[6rem] lg:w-auto"
            />
            <img src={tata_logo} alt="" className="md:w-[6rem] lg:w-auto" />
            <img src={sony_logo} alt="" className="md:w-[6rem] lg:w-auto" />
            <img src={uber_logo} alt="" className="md:w-[6rem] lg:w-auto" />
            <img src={airtel_logo} alt="" className="md:w-[6rem] lg:w-auto" />
            <img src={ibm_logo} alt="" className="md:w-[6rem] lg:w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
