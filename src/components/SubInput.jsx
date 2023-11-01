import { useRef, useState } from "react";
import asterisk from "../assets/BookFreeTrial/asterisk.png";
import attachment from "../assets/attachment.svg";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";
import down_arrow from "../assets/down-arrow.svg";

/**
 * A component that renders a form input with an optional label and file attachment button.
 * @param {Object} props - The props object.
 * @param {string} props.label - The label for the input.
 * @param {function} props.onChange - The function to call when the input value changes.
 * @param {string} props.type - The type of input to render (e.g. "text", "email", "file").
 * @param {boolean} props.required - Whether the input is required.
 * @param {string} props.name - The name of the input.
 * @param {string} props.value - The value of the input.
 * @param {function} props.onBlur - The function to call when the input loses focus.
 * @param {string} props.error - The error message to display.
 * @param {string} props.accept - The file types to accept.
 * @param {boolean} props.select - Whether the input is a select.
 * @param {Array} props.selectItems - The items to display in the select.
 * @param {function} props.onKeyDown - The function to call when a key is pressed.
 * @param {string} props.placeholder - The placeholder text to display.
 * @returns {JSX.Element} - The rendered component.
 */

const SubInput = ({
  label,
  onChange,
  type,
  required,
  name,
  value,
  onBlur,
  error,
  accept,
  select,
  selectItems,
  onKeyDown,
  placeholder,
}) => {
  const [file, setFile] = useState(null);
  const fileRef = useRef(null);

  const handleFileClick = () => {
    fileRef.current.click();
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    onChange(e);
    setFile(file);
  };

  const handleKeyPress = (event) => {
    if (name === "phone") {
      if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
      }
    }
    if (name === "fullName") {
      if (!/[a-zA-Z ]/.test(event.key)) {
        event.preventDefault();
      }
    } else {
      onKeyDown(event);
    }
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
          accept={accept}
        />
      )}

      {select ? (
        <>
          <select
            name={name}
            id="select-input"
            defaultValue="Select"
            selected="Select"
            className={`text-[14px] sm:text-[1rem] font-poppins-regular-20 p-[8px] sm:p-4 pl-[12px] sm:pl-[25px] box-border border-2 border-solid w-full focus:outline-none bg-white cursor-pointer ${
              error ? "border-[#D20000]" : "border-text-light"
            } rounded-full inline-block`}
            onChange={onChange}
            // onSelect={onChange}
          >
            <option value="Select" disabled hidden>
              Select
            </option>
            {selectItems.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>

          <img
            src={down_arrow}
            className="absolute top-[10px] sm:top-[20%] right-[15px] sm:right-[20px] w-[20px] sm:w-auto cursor-pointer"
            alt=""
          />
        </>
      ) : (
        // <Tooltip title={error} placement="top" arrow>
        <>
          <input
            id="input"
            type={type === "file" ? "text" : type}
            maxLength={type === "tel" ? "10" : null}
            name={name}
            // onKeyPress={handleKeyPress}
            placeholder={placeholder && `Ex: ${placeholder}`}
            value={type === "file" ? file?.name : value}
            disabled={type === "file" ? true : false}
            onChange={onChange}
            onBlur={onBlur}
            onKeyDown={handleKeyPress}
            className={`text-[14px] sm:text-[1rem] font-poppins-regular-20 p-[8px] sm:p-4 pl-[12px] sm:pl-[25px] box-border border-2 border-solid w-full ${
              error ? "border-[#D20000]" : "border-text-light"
            } rounded-full inline-block`}
          />
          {error && (
            <p className="text-[#D20000] font-poppins-regular-20 text-[14px] pl-[25px] m-0 mt-3">
              {error}
            </p>
          )}
        </>
        // </Tooltip>
      )}
    </div>
  );
};

SubInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  accept: PropTypes.string,
  select: PropTypes.bool,
  selectItems: PropTypes.array,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
};

SubInput.defaultProps = {
  // type: "text",
  required: false
};

export default SubInput;
