import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * A component that renders a primary button with a link and text.
 * @param {Object} props - The props object.
 * @param {string} props.text - The text for the button.
 * @param {string} props.link - The link for the button.
 * @param {function} props.onclick - The function to call when the button is clicked.
 * @param {string} props.color - The color of the button.
 * @param {boolean} props.primary - Whether the button is primary or secondary.
 * @returns {JSX.Element} - The rendered component.
 */

const ButtonPrimary = ({ text, link, onclick, color, primary }) => {
  return (
    // fixed bg and text color
    <Link to={link}>
      <button
        className={`relative z-10 rounded-[2.5rem] bg-${
          primary ? color : "white"
        } inline-flex py-[14px] px-[2rem] justify-center items-center text-${
          primary ? (color === "neon" ? "text-dark" : "white") : "text-dark"
        } text-[1.25rem] font-[500] leading-[130%] font-poppins-regular-20 cursor-pointer
        ${!primary ? "border-solid border-[4px] border-neon" : "border-none"}

        `}
        onClick={onclick}
      >
        {text}
      </button>
    </Link>
  );
};

ButtonPrimary.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  onclick: PropTypes.func,
  color: PropTypes.string,
  primary: PropTypes.bool
};

ButtonPrimary.defaultProps = {
  text: "Button",
  link: "/",
  onclick: () => {},
  color: "neon",
  primary: true
};

export default ButtonPrimary;
