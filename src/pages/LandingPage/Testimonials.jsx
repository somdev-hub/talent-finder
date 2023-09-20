import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import testimonial_img from "../../assets/landing-page/testimonial-img.png";
import microsoft from "../../assets/landing-page/microsoft.png";
import star from "../../assets/landing-page/star.svg";
import group7 from "../../assets/landing-page/group-7.svg";
import ellipse15 from "../../assets/landing-page/ellipse-15.svg";

const Testimonials = () => {
  return (
    <div className="relative p-6 sm:p-[5rem] bg-white sm:bg-blue-shade flex flex-col justify-center text-center items-center">
      <div className="relative">
        <p className="text-blue sm:text-neon text-[1.5rem] font-[400] font-coolvetica-56 m-0">
          Reviews
        </p>
        <img
          src={group7}
          className="absolute left-[5rem] top-0 sm:block hidden"
          alt=""
        />
      </div>
      <h2 className="text-black sm:text-white font-[400] text-[2.5rem] sm:text-[3.5rem] font-coolvetica-56 m-0 mt-8">
        What our clients say
      </h2>
      <div className="w-full sm:mt-[4rem]  z-10">
        <div className="relative flex w-full justify-center items-center m-auto">
          <Swiper
            className="mySwiper"
            slidesPerView="auto"
            centeredSlides={true}
            centeredSlidesBounds={true}
          >
            <SwiperSlide>
              <div className="sm:p-0 pt-[5rem]">
                <div className="sm:w-[75%] relative box-border m-auto p-6 sm:px-[6rem] sm:py-[3rem] bg-blue text-white sm:text-black sm:bg-white rounded-[1.25rem] sm:rounded-[2.5rem] flex items-center justify-center gap-10">
                  <img
                    src={testimonial_img}
                    alt=""
                    className="sm:w-auto w-[35%] right-0 top-[-5rem] absolute sm:hidden block"
                  />
                  <div className="sm:static hidden sm:block absolute top-[-10%]">
                    <img
                      src={testimonial_img}
                      alt=""
                      className="sm:w-auto w-2/3"
                    />
                  </div>
                  <div className="text-left">
                    <div className="flex sm:flex-row flex-col justify-between items-start">
                      <div className="">
                        <h3 className="text-[1.25rem] m-0 leading-[130%] font-poppins-regular-20 flex sm:flex-row flex-col">
                          <span className="font-[500]">Nandini Rawat, </span>
                          <span className="font-[300]">Software Engineer</span>
                        </h3>
                        <div className="mt-4 sm:mt-2">
                          <img src={microsoft} alt="" />
                        </div>
                      </div>
                      <div className="flex gap-2 sm:mt-0 mt-4">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                      </div>
                    </div>
                    <h2 className="text-[1.25rem] sm:text-[2.5rem] font-coolvetica-56 font-[400] m-0 mt-4">
                      Unlocking Opportunities!!
                    </h2>
                    <p className="text-[1.25rem] font-[400] leading-[130%] font-poppins-regular-20 text-white sm:text-text-medium m-0 mt-4 sm:mt-[2.25rem]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sm:p-0 pt-[5rem]">
                <div className="sm:w-[75%] relative box-border m-auto p-6 sm:px-[6rem] sm:py-[3rem] bg-blue text-white sm:text-black sm:bg-white rounded-[1.25rem] sm:rounded-[2.5rem] flex items-center justify-center gap-10">
                  <img
                    src={testimonial_img}
                    alt=""
                    className="sm:w-auto w-[35%] right-0 top-[-5rem] absolute sm:hidden block"
                  />
                  <div className="sm:static hidden sm:block absolute top-[-10%]">
                    <img
                      src={testimonial_img}
                      alt=""
                      className="sm:w-auto w-2/3"
                    />
                  </div>
                  <div className="text-left">
                    <div className="flex sm:flex-row flex-col justify-between items-start">
                      <div className="">
                        <h3 className="text-[1.25rem] m-0 leading-[130%] font-poppins-regular-20 flex sm:flex-row flex-col">
                          <span className="font-[500]">Nandini Rawat, </span>
                          <span className="font-[300]">Software Engineer</span>
                        </h3>
                        <div className="mt-4 sm:mt-2">
                          <img src={microsoft} alt="" />
                        </div>
                      </div>
                      <div className="flex gap-2 sm:mt-0 mt-4">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                      </div>
                    </div>
                    <h2 className="text-[1.25rem] sm:text-[2.5rem] font-coolvetica-56 font-[400] m-0 mt-4">
                      Unlocking Opportunities!!
                    </h2>
                    <p className="text-[1.25rem] font-[400] leading-[130%] font-poppins-regular-20 text-white sm:text-text-medium m-0 mt-4 sm:mt-[2.25rem]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <img
        src={ellipse15}
        className="absolute bottom-0 right-0 z-[1] sm:block hidden"
        alt=""
      />
    </div>
  );
};

export default Testimonials;
