import React, { useState } from "react";
import asterisk from "../../assets/BookFreeTrial/asterisk.png";
import tick from "../../assets/BookFreeTrial/tick.svg";
import ButtonPrimary from "../../components/ButtonPrimary";
import SubInput from "../../components/SubInput";

const Form = () => {
  const [checked, setChecked] = React.useState({
    yes: false,
    no: false
  });
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    areaOfInterest: "",
    highestEducationalQualification: "",
    currentCompany: "",
    expertise: "",
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

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setErrorData(errors);
      console.warn(errors);
      return;
    }
    console.log(formData);
  };

  const validateForm = (values) => {
    const errors = {};
    const fields = {
      fullName: "Full name",
      email: "Email",
      phone: "Phone number",
      areaOfInterest: "Area of interest",
      expertise: "Expertise",
      howDidYouHear: "How did you hear"
    };
    for (const [fieldName, fieldLabel] of Object.entries(fields)) {
      if (!values[fieldName]) {
        errors[fieldName] = `${fieldLabel} is required`;
      } else if (
        fieldName === "email" &&
        !/\S+@\S+\.\S+/.test(values[fieldName])
      ) {
        errors[fieldName] = `${fieldLabel} is invalid`;
      } else if (fieldName === "phone" && !/^\d{10}$/.test(values[fieldName])) {
        errors[fieldName] = `${fieldLabel} is invalid`;
      }
    }
    return errors;
  };

  const validateField = (e) => {
    const { name, value } = e.target;
    const errors = validateForm({ [name]: value });
    console.log(errors);
    setErrorData({
      ...errorData,
      [name]: errors[name]
    });
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
                  onBlur={validateField}
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
                onChange={handleChange}
                error={errorData.expertise}
                onBlur={validateField}
              />
              <h3 className="hidden sm:block text-text-dark text-[1rem] sm:text-[1.5rem] font-poppins-regular-20 font-[500] leading-[120%] text-center sm:text-left ">
                We appreciate your interest, Please Fill out the form
              </h3>
              <h3 className="block sm:hidden text-text-dark text-[1rem] sm:text-[1.5rem] font-poppins-regular-20 font-[500] leading-[120%] text-center sm:text-left ">
                Please Indicate Learning goals
              </h3>
              <div className="flex flex-col gap-[2.5rem]">
                <SubInput label="Goal 1" name="goal1" onChange={handleChange} />
                <SubInput label="Goal 2" name="goal2" onChange={handleChange} />
                <SubInput label="Goal 3" name="goal3" onChange={handleChange} />
              </div>
              <div className="">
                <h3 className="text-text-dark text-[14px] sm:text-[1.5rem] font-poppins-regular-20 font-[500] leading-[120%] text-center sm:text-left ">
                  Are you willing to commit 1-2 hrs every week for 1 year?
                </h3>
                <div className="flex gap-[3rem] sm:justify-start justify-center">
                  <div className="">
                    <input
                      type="checkbox"
                      name="yes"
                      id=""
                      defaultChecked={checked.yes}
                      checked={checked.yes}
                      className="appearance-none"
                    />
                    <div className="flex">
                      <div
                        className={`text-text-medium sm:text-text-dark h-[1.3rem] w-[1.3rem] mr-4 cursor-pointer relative border-[2.5px] border-solid border-white-400`}
                        onClick={() => setChecked({ yes: true, no: false })}
                      >
                        <img
                          src={tick}
                          alt=""
                          className={`absolute top-0 left-0 w-[20px]  ${
                            checked.yes ? "block" : "hidden"
                          }`}
                        />
                      </div>
                      <p
                        className="text-text-medium sm:text-text-dark m-0 font-[500] text-[1rem] cursor-pointer font-poppins-regular-20"
                        onClick={() => setChecked({ yes: true, no: false })}
                      >
                        yes
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <input
                      type="checkbox"
                      name="no"
                      id=""
                      defaultChecked={checked.no}
                      checked={checked.no}
                      className="appearance-none"
                    />
                    <div className="flex">
                      <div
                        className={`text-text-medium sm:text-text-dark h-[1.3rem] w-[1.3rem] mr-4 cursor-pointer relative border-[2.5px] border-solid border-white-400`}
                        onClick={() => setChecked({ yes: false, no: true })}
                      >
                        <img
                          src={tick}
                          alt=""
                          className={`absolute top-0 left-0 w-[20px]  ${
                            checked.no ? "block" : "hidden"
                          }`}
                        />
                      </div>
                      <p
                        className="text-text-medium sm:text-text-dark m-0 font-[500] text-[1rem] cursor-pointer font-poppins-regular-20"
                        onClick={() => setChecked({ yes: false, no: true })}
                      >
                        no
                      </p>
                    </div>
                  </div>
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
                    selectItems={["Website", "Social media"]}
                  />
                </div>
                <div className="block sm:hidden">
                  <SubInput
                    label="How did you hear of our mentoring ?"
                    name="howDidYouHear"
                    onChange={handleChange}
                    select={true}
                    selectItems={["Coding", "Designing", "Marketing"]}
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
