import { useState } from "react";
import tick from "../../assets/BookFreeTrial/tick.svg";
import ButtonPrimary from "../../components/ButtonPrimary";
import SubInput from "../../components/SubInput";
import formValidator from "../../components/functions/formValidator";
import cross from "../../assets/cross.svg";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    areaOfInterest: "",
    highestEducationalQualification: "",
    currentCompany: "",
    expertise: [],
    goal1: "",
    goal2: "",
    goal3: "",
    isCommitted: false,
    howDidYouHear: ""
  });
  const [errorData, setErrorData] = useState({
    fullName: "",
    email: "",
    phone: "",
    areaOfInterest: "",
    expertise: "",
    isCommitted: false,
    howDidYouHear: ""
  });
  const rules = {
    fullName: "Full name",
    email: "Email",
    phone: "Phone number",
    areaOfInterest: "Area of interest",
    expertise: "Expertise",
    howDidYouHear: "How did you hear"
  };
  const goalExamples = {
    coding: [
      "Build a portfolio",
      "Get a job",
      "Get a promotion",
      "Start a business",
      "Learn a new skill"
    ],
    designing: [
      "Design an app",
      "Get a job",
      "Get a promotion",
      "Start a business",
      "Learn a new skill"
    ],
    marketing: [
      "Get a job",
      "Get a promotion",
      "Start a business",
      "Learn a new skill"
    ]
  };
  const [goalExample, setGoalExample] = useState(
    formData.areaOfInterest ? goalExamples.coding : []
  );

  const validator = formValidator({ rules });

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "areaOfInterest") {
      setGoalExample(goalExamples[e.target.value.toLowerCase()]);
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      setFormData({
        ...formData,
        [e.target.name]: [...formData.expertise, e.target.value]
      });
      e.target.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validator(formData);
    if (Object.keys(errors).length > 0) {
      setErrorData(errors);
      return;
    }
    console.log(formData);
  };

  const validateField = (e) => {
    const { name } = e.target;
    const errors = validator(formData);
    setErrorData((prevErrorData) => ({
      ...prevErrorData,
      [name]: errors[name]
    }));
  };

  return (
    <div className="mx-[1.5rem] xl:mx-[7.5rem] sm:mx-[3.5rem] sm:mt-[10rem] mb-[5rem]">
      <div className=" text-center">
        <h1 className="hidden sm:block text-text-dark m-0 mt-[4.5rem] font-coolvetica-56 text-[3.5rem] font-[400]">
          Book Your Free Mentorship & Placement Trial.
        </h1>
        <h1 className="sm:hidden block text-text-dark m-0 mt-[4.5rem] font-coolvetica-56 text-[2.3rem] font-[400]">
          Book Your Free Trial.
        </h1>

        <h3 className="my-[1.5rem] sm:my-[2.25rem] text-text-medium font-poppins-regular-20 text-[14px] sm:text-[1.5rem] font-[400] leading-[120%]">
          Your information is safe with us. We will only use it to provide you
          with trial details.
        </h3>
        <p className="hidden sm:block text-text-medium font-poppins-regular-20 font-[400] leading-[120%]">
          Brief description - Lorem ipsum dolor sit amet consectetur. Ac ut nunc
          sodales a integer. Risus sapien nec volutpat utLorem ipsum <br />{" "}
          dolor sit nly skill development but also mentorship and support that
          foster your personal and professional growth.
        </p>
      </div>
      <div className="sm:mt-[4rem]  xl:px-[6.5rem]">
        <h3 className="m-0 sm:m-auto text-text-dark text-[1rem] sm:text-[1.5rem] font-poppins-regular-20 font-[500] leading-[120%] text-center sm:text-left ">
          We appreciate your interest, Please Fill out the form
        </h3>
        <div className="mt-[3.5rem]">
          <form action="">
            <div className="flex flex-col gap-[2.5rem]">
              <div
                className="flex sm:flex-row flex-col gap-[1.5rem] w-full"
                onChange={handleChange}
              >
                <SubInput
                  label="Full Name"
                  required={true}
                  name="fullName"
                  error={errorData.fullName}
                  onChange={handleChange}
                  onBlur={validateField}
                />
                <SubInput
                  label="Email Address"
                  required={true}
                  name="email"
                  error={errorData.email}
                  onChange={handleChange}
                  onBlur={validateField}
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-[1.5rem] w-full">
                <SubInput
                  label="Phone Number"
                  required={true}
                  error={errorData.phone}
                  type="number"
                  name="phone"
                  onChange={handleChange}
                  onBlur={validateField}
                />
                <SubInput
                  label="Area of Interest"
                  required={true}
                  name="areaOfInterest"
                  onChange={handleChange}
                  error={errorData.areaOfInterest}
                  select={true}
                  selectItems={["Coding", "Designing", "Marketing"]}
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-[1.5rem] w-full">
                <SubInput
                  label="Highest Education Qualification "
                  name="highestEducationalQualification"
                  onChange={handleChange}
                />
                <SubInput
                  label="Current company"
                  name="currentCompany"
                  onChange={handleChange}
                />
              </div>

              <SubInput
                label="Expertise/Skills"
                required={true}
                name="expertise"
                onKeyDown={handleKeyDown}
                error={errorData.expertise}
              />
              <div className="flex gap-4 flex-wrap">
                {formData.expertise?.map((item, index) => {
                  return (
                    <div
                      className="flex gap-2 items-center border-solid border-[1px] border-text-light rounded-full py-2 px-3 w-[fit-content]"
                      key={index}
                    >
                      <p className="text-text-dark text-[12px] sm:text-[1rem] font-poppins-regular-20 font-[500] leading-[120%] text-center sm:text-left m-0">
                        {item}
                      </p>
                      <img
                        src={cross}
                        alt=""
                        className="w-[1rem] cursor-pointer"
                        onClick={() => {
                          let newExpertise = [...formData.expertise];
                          newExpertise.splice(index, 1);
                          setFormData({
                            ...formData,
                            expertise: newExpertise
                          });
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              <h3 className="hidden sm:block text-text-dark text-[1rem] sm:text-[1.5rem] font-poppins-regular-20 font-[500] leading-[120%] text-center sm:text-left ">
                We appreciate your interest, Please Fill out the form
              </h3>
              <h3 className="block sm:hidden text-text-dark text-[1rem] sm:text-[1.5rem] font-poppins-regular-20 font-[500] leading-[120%] text-center sm:text-left ">
                Please Indicate Learning goals
              </h3>
              <div className="flex flex-col gap-[2.5rem]">
                <SubInput
                  label="Goal 1"
                  name="goal1"
                  onChange={handleChange}
                  placeholder={goalExample[0]}
                />
                <SubInput
                  label="Goal 2"
                  name="goal2"
                  onChange={handleChange}
                  placeholder={goalExample[1]}
                />
                <SubInput
                  label="Goal 3"
                  name="goal3"
                  onChange={handleChange}
                  placeholder={goalExample[2]}
                />
              </div>
              <div className="">
                <h3 className="text-text-dark text-[14px] sm:text-[1.5rem] font-poppins-regular-20 font-[500] leading-[120%] text-center sm:text-left ">
                  Are you willing to commit 1-2 hrs every week for 1 year?
                </h3>
                <div className="flex gap-[3rem] sm:justify-start justify-center">
                  {["yes", "no"].map((value) => (
                    <div className="" key={value}>
                      <input
                        type="checkbox"
                        name={value}
                        id=""
                        defaultChecked={
                          value === "yes"
                            ? formData.isCommitted
                            : !formData.isCommitted
                        }
                        checked={
                          value === "yes"
                            ? formData.isCommitted
                            : !formData.isCommitted
                        }
                        className="appearance-none"
                      />
                      <div className="flex">
                        <div
                          className={`text-text-medium sm:text-text-dark h-[1.3rem] w-[1.3rem] mr-4 cursor-pointer relative border-[2.5px] border-solid border-white-400`}
                          onClick={() =>
                            setFormData({
                              ...formData,
                              isCommitted: value === "yes"
                            })
                          }
                        >
                          <img
                            src={tick}
                            alt=""
                            className={`absolute top-0 left-0 w-[20px]  ${
                              value === "yes"
                                ? formData.isCommitted
                                  ? "block"
                                  : "hidden"
                                : !formData.isCommitted
                                ? "block"
                                : "hidden"
                            }`}
                          />
                        </div>
                        <p
                          className="text-text-medium sm:text-text-dark m-0 font-[500] text-[1rem] cursor-pointer font-poppins-regular-20"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              isCommitted: value === "yes"
                            })
                          }
                        >
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="">
                <h3 className="hidden sm:block mb-[3.75rem] text-text-dark text-[1rem] sm:text-[1.5rem] font-poppins-regular-20 font-[500] leading-[120%] text-center sm:text-left ">
                  How did you hear of our mentoring ?
                </h3>
                <div className="hidden sm:block">
                  <SubInput
                    name="howDidYouHear"
                    onChange={handleChange}
                    select={true}
                    selectItems={[
                      "Website",
                      "YouTube",
                      "Indeed",
                      "Linkedin",
                      "Promotion",
                      "others"
                    ]}
                  />
                </div>
                <div className="block sm:hidden">
                  <SubInput
                    label="How did you hear of our mentoring ?"
                    name="howDidYouHear"
                    onChange={handleChange}
                    select={true}
                    selectItems={[
                      "Website",
                      "YouTube",
                      "Indeed",
                      "Linkedin",
                      "Promotion",
                      "others"
                    ]}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <ButtonPrimary
                  text="Book Free Trial"
                  onclick={handleSubmit}
                  color="neon"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
