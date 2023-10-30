import { useState } from "react";
import SubInput from "../../components/SubInput";
import ButtonPrimary from "../../components/ButtonPrimary";
import facebook from "../../assets/PlacementForm/facebook_blue.svg";
import x from "../../assets/PlacementForm/x_blue.svg";
import insta from "../../assets/PlacementForm/insta_blue.svg";
import linkedin from "../../assets/PlacementForm/linkedin_blue.svg";
import ReCAPTCHA from "react-google-recaptcha";
import MultipleInput from "../../components/MultipleInput";
import formValidator from "../../components/functions/formValidator";

const Form = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    skills: [],
    experience: "",
    funding: false,
    employees: "",
    howDidYouHear: ""
  });
  const [errorData, setErrorData] = useState({});
  const rules = {
    skills: "skill",
    experience: "experience",
    funding: "funding",
    employees: "number of employees"
  };

  const handleInputChange = (event, heading, object) => {
    event.preventDefault();
    switch (heading) {
      case "Skills": {
        const index = selectedOptions.skills.indexOf(object);
        setSelectedOptions({
          ...selectedOptions,
          skills:
            index === -1
              ? [...selectedOptions.skills, object]
              : [
                  ...selectedOptions.skills.slice(0, index),
                  ...selectedOptions.skills.slice(index + 1)
                ]
        });
        break;
      }
      case "Experience level":
        setSelectedOptions({
          ...selectedOptions,
          experience: object
        });
        break;
      case "Are you seed funded or VC backed?":
        setSelectedOptions({
          ...selectedOptions,
          funding: object === "Yes"
        });
        break;
      case "How many employees do you have?":
        setSelectedOptions({
          ...selectedOptions,
          employees: object
        });
        break;
      default:
        break;
    }
  };

  const validator = formValidator({ rules });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSelectedOptions({
      ...selectedOptions,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validator(selectedOptions);
    setErrorData(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    console.log(selectedOptions);
  };

  const formOptions = [
    {
      heading: "Skills",
      subheading: "Select one or more skills based on your requirement",
      options: ["React", "JavaScript", "Java", "PHP"],
      required: true
    },
    {
      heading: "Experience level",
      subheading:
        "Select how many years of experience you're looking for in a candidate",
      options: ["1-3", "4-6", "7-10", "10+"],
      required: true
    },
    {
      heading: "Are you seed funded or VC backed?",
      subheading: "Select one or more skills based on your requirement",
      options: ["Yes", "No"],
      required: false
    },
    {
      heading: "How many employees do you have?",
      subheading: "Select the size of your company",
      options: ["1-11", "12-50", "51-200", "200+"],
      required: false
    }
  ];
  return (
    <div className="mx-[1.5rem] xl:mx-[7.5rem] sm:mx-[3.5rem] sm:mt-[8rem] mb-[5rem]">
      <div className=" text-center flex flex-col items-center">
        <h1 className="hidden sm:block text-text-dark m-0 mt-[4.5rem] sm:mt-0 font-coolvetica-56 text-[3.5rem] font-[400]">
          Apply Now for Placement Opportunities.
        </h1>
        <h1 className="sm:hidden block text-text-dark m-0 mt-[4.5rem] font-coolvetica-56 text-[1.8rem] font-[400]">
          Apply Now for Placement Opportunities.
        </h1>

        <h3 className="m-0 my-[1.5rem] sm:my-[1.5rem] text-text-medium font-poppins-regular-20 text-[14px] sm:text-[1.5rem] font-[400] leading-[120%]">
          Your privacy is important to us. Your information will only be used
          for processing your application
        </h3>
      </div>
      <div className="xl:mx-[12rem] sm:mt-[5rem]">
        <form action="">
          <h3 className="m-0 sm:m-auto text-text-dark text-[1rem] sm:text-[1.5rem] font-poppins-regular-20 font-[500] leading-[120%] text-center sm:text-left ">
            We appreciate your interest, Please Fill out the form
          </h3>
          {formOptions.map((option, index) => {
            return (
              <MultipleInput
                key={index}
                heading={option.heading}
                subheading={option.subheading}
                options={option.options}
                required={option.required}
                handleInputChange={handleInputChange}
                error={errorData[option.heading]}
              />
            );
          })}
          <div className="mt-[2.5rem] mb-[2.5rem]">
            <SubInput
              label="How did you hear of our Placement Opportunity ?"
              name="howDidYouHear"
              onChange={handleInput}
              value={selectedOptions.howDidYouHear}
              select={true}
              selectItems={["Website","YouTube","Indeed","Linkedin","Promotion","others"]}
            />
          </div>

          <ReCAPTCHA sitekey="6Lfa97UoAAAAAA719RaIb97bptsRnGtQP_9cB1V8" />

          <div className=" justify-center hidden sm:flex">
            <ButtonPrimary
              text="Apply Now"
              onclick={handleSubmit}
              color="neon"
            />
          </div>
        </form>
      </div>
      <div className="mt-[4rem] xl:mx-[6.5rem] flex sm:flex-row flex-col gap-[3rem] justify-between">
        <div className="flex flex-col justify-between">
          <p className="m-0 text-text-dark text-[15px] text-center sm:text-left font-[500] sm:text-[1.5rem] sm:font-[400] leading-[120%] font-poppins-regular-20">
            For inquiries or assistance related to the <br /> application
            process.
          </p>

          <div className="hidden sm:block">
            <h3 className="text-text-dark text-[2rem] font-[500] leading-[110%] font-coolvetica-56">
              Follow Us{" "}
            </h3>
            <div className="flex gap-[1rem]">
              <img src={facebook} alt="" />
              <img src={x} alt="" />
              <img src={insta} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:gap-[2rem] text-center sm:text-left">
          <h2 className="text-text-dark text-[1rem] font-[500] sm:text-[2.5rem] sm:font-[400]  m-0 font-coolvetica-56">
            Contact information
          </h2>
          <p className="mt-[1.5rem] sm:mt-0 text-text-medium text-[1rem] sm:text-[1.25rem] font-poppins-regular-20 font-[400] leading-[130%] m-0">
            Lorem ipsum dolor <br /> sit amet, consectetur adipiscing elit,{" "}
            <br /> sed do eiusmod tempor{" "}
          </p>
          <p className="text-text-medium text-[1rem] sm:text-[1.25rem] font-poppins-regular-20 font-[400] leading-[130%] m-0 mt-[0.5rem] sm:mt-0">
            Call Us @ 0123456789
          </p>
          <p className="text-text-medium text-[1rem] sm:text-[1.25rem] font-poppins-regular-20 font-[400] leading-[130%] m-0 mt-[0.5rem] sm:mt-0">
            We are open 24/7
          </p>
        </div>
        <div className=" justify-center sm:hidden flex">
          <ButtonPrimary text="Apply Now" color="neon" onclick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Form;
