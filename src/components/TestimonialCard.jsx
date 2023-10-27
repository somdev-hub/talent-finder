import star from "../assets/landing-page/star.svg";
import PropTypes from "prop-types";

/**
 * A component that renders a testimonial card with an image, name, designation, heading, company, text, stars, and pagination.
 * @param {Object} props - The props object.
 * @param {string} props.img - The image URL for the testimonial.
 * @param {string} props.name - The name of the person giving the testimonial.
 * @param {string} props.designation - The designation of the person giving the testimonial.
 * @param {string} props.heading - The heading for the testimonial.
 * @param {string} props.company - The company of the person giving the testimonial.
 * @param {string} props.text - The text of the testimonial.
 * @param {number} props.stars - The number of stars to display for the testimonial.
 * @param {number} props.currentPagination - The current pagination index.
 * @param {function} props.setCurrentPagination - The function to call when the pagination index changes.
 * @param {number} props.totalPagination - The total number of pagination items.
 * @param {string} props.backgroundColor - The background color for the testimonial card.
 * @returns {JSX.Element} - The rendered component.
 */

const TestimonialCard = ({
  img,
  name,
  designation,
  heading,
  company,
  text,
  stars,
  currentPagination,
  setCurrentPagination,
  totalPagination,
  backgroundColor
}) => {
  return (
    <div className={`xl:p-0 pt-[5rem] `}>
      <div
        className={`${
          backgroundColor === "blue-shade"
            ? "sm:border-solid border-[4px] border-neon items-end"
            : "items-center"
        }  xl:w-[75%] relative box-border m-auto p-6 md:px-[3rem] lg:px-[4rem] xl:py-[3rem] bg-blue text-white ${
          backgroundColor === "blue-shade" ? "sm:text-white" : "sm:text-black"
        } sm:bg-${backgroundColor} rounded-[1.25rem] sm:rounded-[2.5rem] flex  justify-center gap-10`}
      >
        <img
          src={img}
          alt=""
          className="xl:w-auto w-[35%] md:w-1/4 lg:w-[18%] md:top-[-6rem] right-0 top-[-5rem] absolute xl:hidden block"
          loading="lazy"
        />
        <div className="sm:static hidden xl:block absolute top-[-10%]">
          <img src={img} alt="" className="sm:w-auto w-2/3" loading="lazy" />
        </div>
        <div className="text-left">
          <div className="flex xl:flex-row flex-col justify-between items-start">
            <div className="">
              <h3 className="text-[1.25rem] m-0 leading-[130%] font-poppins-regular-20 flex sm:flex-row flex-col">
                <span className="font-[500]">{name}, </span>
                <span className="font-[300] sm:ml-[7px]">{designation}</span>
              </h3>
              <div
                className={`mt-4 sm:mt-2 ${
                  backgroundColor === "blue-shade" ? "sm:hidden" : "sm:block"
                }`}
              >
                <img src={company} alt="" />
              </div>
            </div>
            <div className="flex gap-2 sm:mt-0 mt-4">
              {[...Array(stars)].map((e, i) => {
                return <img src={star} alt="" key={i} />;
              })}
            </div>
          </div>
          <h2 className="text-[1.25rem] sm:text-[2.5rem] font-coolvetica-56 font-[400] m-0 mt-4">
            {heading}
          </h2>
          {/* fixed width size */}
          <p
            className={`w-[83%] sm:w-[71%] xl:w-[90%]  2xl:w-[81%] sm:text-[1.25rem] font-[300] leading-[130%] font-poppins-regular-20 text-white ${
              backgroundColor === "blue-shade"
                ? "sm:text-white sm:mt-4"
                : "sm:text-text-medium sm:mt-[2.25rem]"
            } m-0 mt-4 `}
          >
            {text}
          </p>
          <div className="flex mt-10">
            {[...Array(totalPagination)].map((e, i) => {
              return (
                <div
                  key={i}
                  className={` inline-block ml-[5px] cursor-pointer w-[21px] h-[4px] rounded-[10px]  z-10 opacity-[1] ${
                    currentPagination === i
                      ? `w-[56px] bg-white ${
                          backgroundColor === "blue-shade"
                            ? "sm:bg-white"
                            : "sm:bg-[#4b4b4b]"
                        }`
                      : "bg-[#d9d9d9] sm:bg-[#bbbbbd]"
                  }`}
                  onClick={() => setCurrentPagination(i)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  designation: PropTypes.string,
  heading: PropTypes.string,
  company: PropTypes.string,
  text: PropTypes.string,
  stars: PropTypes.number,
  currentPagination: PropTypes.number,
  setCurrentPagination: PropTypes.func,
  totalPagination: PropTypes.number,
  backgroundColor: PropTypes.string
};

export default TestimonialCard;
