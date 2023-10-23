import { useState } from "react";
import PropTypes from "prop-types";

/**
 * A component that renders a multiple choice input with checkboxes.
 * @param {Object} props - The props object.
 * @param {string[]} props.options - The list of options to render.
 * @param {string} props.heading - The heading for the input.
 * @param {string} props.subheading - The subheading for the input.
 * @param {boolean} props.required - Whether the input is required.
 * @param {function} props.handleInputChange - The function to call when the input value changes.
 * @returns {JSX.Element} - The rendered component.
 */

const MultipleInput = ({
  options,
  heading,
  subheading,
  required,
  handleInputChange
}) => {
  const [isChecked, setIsChecked] = useState(
    options.reduce((acc, option) => {
      acc[option] = false;
      return acc;
    }, {})
  );
  const handleOptionChange = (option) => {
    if (heading === "Skills") {
      setIsChecked({
        ...isChecked,
        [option]: !isChecked[option]
      });
    } else {
      const updatedIsChecked = options.reduce((acc, currentOption) => {
        acc[currentOption] = currentOption === option;
        return acc;
      }, {});
      setIsChecked(updatedIsChecked);
    }
  };

  return (
    <div className="mt-10">
      <h3 className="text-[1.25rem] sm:text-[1.5rem] font-[500] leading-[120%] font-poppins-regular-20 m-0">
        {`${heading}${required === true ? "*" : ""}`}
      </h3>
      <p className="text-[12px] sm:text-[1.25rem] font-[500] leading-[130%] font-poppins-regular-20 text-text-medium m-0 my-4">
        {subheading}
      </p>
      <div className="flex gap-4 flex-wrap">
        {options?.map((option, index) => {
          return (
            <div className="flex justify-center items-center" key={index}>
              <input
                type="checkbox"
                name=""
                id="check-input"
                className="appearance-none"
              />
              <div
                className={`w-[8rem] sm:w-[11rem] rounded-full px-[2rem] ${
                  isChecked[option]
                    ? "bg-blue-shade"
                    : "bg-white  border-solid border-2 border-text-light"
                }  flex justify-center py-[8px] cursor-pointer box-border`}
                onClick={(event) => {
                  handleInputChange(event, heading, option);
                  handleOptionChange(option);
                }}
              >
                <label
                  htmlFor="check-input"
                  className={`${
                    isChecked[option] ? "text-white" : "text-text-medium"
                  } text-[12px] sm:text-[1.25rem] font-[500] leading-[130%] font-poppins-regular-20 m-0`}
                >
                  {option}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

MultipleInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  required: PropTypes.bool,
  handleInputChange: PropTypes.func
};

export default MultipleInput;
