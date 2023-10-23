import PropsType from "prop-types";

/**
 * @param {string} heading
 * @param {string} text
 * @param {string} img
 * @returns {JSX.Element}
 *
 */

const HowItWorkSlide = ({ heading, text, img }) => {
  return (
    // fixed border color
    <div className="p-4 text-center sm:text-left md:p-8 xl:p-[4rem] box-border flex lg:flex-row flex-col sm:gap-8 gap-6 border-[2px] border-solid border-[var(--text-light,#BBBBBD)]">
      <div className="md:flex md:items-center md:flex-col lg:block w-auto md:w-1/2 md:text-center lg:text-left">
        {/* Added text color */}
        <h3 className="text-[2.25rem] text-[#202020] sm:text-[2.5rem] m-0 font-[400] font-coolvetica-56">
          {heading}
        </h3>
        {/* fixed width in mobile and 2xl view and added color var */}
        <p className="w-[80%] sm:w-[88%] xl:w-[93%] 2xl:w-[90%] mx-auto sm:mx-0 sm  text-[1rem] sm:text-[1rem] leading-[130%] font-[400] font-poppins-regular-20 text-[var(--text-medium,#4B4B4B)]">
          {text}
        </p>
      </div>
      <div className="w-auto md:w-1/2">
        <img src={img} alt="" className="w-full" />
      </div>
    </div>
  );
};

HowItWorkSlide.propTypes = {
  heading: PropsType.string.isRequired,
  text: PropsType.string.isRequired,
  img: PropsType.string.isRequired
};

export default HowItWorkSlide;
