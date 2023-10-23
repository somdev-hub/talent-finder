import { useRef, useState } from "react";
import asterisk from "../assets/BookFreeTrial/asterisk.png";
import attachment from "../assets/attachment.svg";
import PropTypes from "prop-types";

/**
 * A component that renders a form input with an optional label and file attachment button.
 * @param {Object} props - The props object.
 * @param {string} props.label - The label for the input.
 * @param {function} props.onChange - The function to call when the input value changes.
 * @param {string} props.type - The type of input to render (e.g. "text", "email", "file").
 * @param {boolean} props.required - Whether the input is required.
 * @param {string} props.name - The name of the input.
 * @param {string} props.value - The value of the input.
 * @returns {JSX.Element} - The rendered component.
 */

const SubInput = ({ label, onChange, type, required, name, value }) => {
  const [file, setFile] = useState(null);
  const fileRef = useRef(null);

  const handleFileClick = () => {
    fileRef.current.click();
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };
  return (
    <div className="flex flex-col w-full relative">
      <label
        htmlFor={`${type === "file" ? "file-input" : "input"}`}
        className="text-text-medium leading-[130%] font-poppins-regular-20 text-[11px] md:text-[1rem] xl:text-[1.25rem] font-[500] flex absolute top-[-9px] sm:top-[-12px] left-[12px] sm:left-[25px] bg-white px-2"
      >
        {label}
        {required && (
          <img
            src={asterisk}
            alt=""
            className="w-[9px] sm:w-[13px] h-[9px] sm:h-[13px] ml-[5px] flex"
          />
        )}
      </label>
      <img
        src={attachment}
        alt=""
        onClick={handleFileClick}
        className={`${
          type === "file" ? "block" : "hidden"
        } sm:w-[25px] w-[18px] absolute top-[28%] sm:right-[25px] right-[18px] cursor-pointer`}
      />
      {type === "file" && (
        <input
          id="file-input"
          type="file"
          name={name}
          ref={fileRef}
          className="hidden"
          onChange={onFileChange}
        />
      )}

      <input
        id="input"
        type={type === "file" ? "text" : type}
        required={required}
        name={name}
        value={type === "file" ? file?.name : value}
        disabled={type === "file" ? true : false}
        onChange={onChange}
        className="text-[14px] sm:text-[1rem] font-poppins-regular-20 p-[8px] sm:p-4 pl-[12px] sm:pl-[25px] box-border border-2 border-solid border-text-light rounded-full inline-block"
      />
    </div>
  );
};

SubInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string
};

SubInput.defaultProps = {
  type: "text",
  required: false
}

export default SubInput;
