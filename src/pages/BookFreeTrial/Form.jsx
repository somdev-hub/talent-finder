import React, { useState } from "react";
import asterisk from "../../assets/BookFreeTrial/asterisk.png";
import tick from "../../assets/BookFreeTrial/tick.svg";
import ButtonPrimary from "../../components/ButtonPrimary";

const SubInput = ({ label, onChange, type, required, name }) => {
  return (
    <div className="flex flex-col w-full relative">
      <label
        htmlFor=""
        className="text-text-medium leading-[130%] font-poppins-regular-20 text-[12px] md:text-[1rem] xl:text-[1.25rem] font-[500] flex absolute top-[-9px] left-[12px] sm:left-[25px] bg-white px-2"
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
      <input
        type="text"
        required={true}
        name={name}
        onChange={onChange}
        className="text-[14px] sm:text-[1rem] font-poppins-regular-20 p-[8px] sm:p-4 pl-[12px] sm:pl-[25px] box-border border-2 border-solid border-text-light rounded-full inline-block"
      />
    </div>
  );
};

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

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
                  onChange={handleChange}
                />
                <SubInput
                  label="Email Address"
                  required={true}
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-[1.5rem] w-full">
                <SubInput
                  label="Phone Number"
                  required={true}
                  name="phone"
                  onChange={handleChange}
                />
                <SubInput
                  label="Area of Interest"
                  required={true}
                  name="areaOfInterest"
                  onChange={handleChange}
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
                  <SubInput name="howDidYouHear" onChange={handleChange} />
                </div>
                <div className="block sm:hidden">
                  <SubInput
                    label="How did you hear of our mentoring ?"
                    name="howDidYouHear"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <ButtonPrimary text="Book Free Trial" onclick={handleSubmit} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;