import React from "react";
import SubInput from "../../components/SubInput";
import ButtonPrimary from "../../components/ButtonPrimary";
import facebook from "../../assets/PlacementForm/facebook_blue.svg";
import x from "../../assets/PlacementForm/x_blue.svg";
import insta from "../../assets/PlacementForm/insta_blue.svg";
import linkedin from "../../assets/PlacementForm/linkedin_blue.svg";

const Form = () => {
  const [formData, setFormData] = React.useState({});
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
    <div className="mx-[1.5rem] xl:mx-[7.5rem] sm:mx-[3.5rem] sm:mt-[8rem] mb-[5rem]">
      <div className=" text-center">
        <h1 className="hidden sm:block text-text-dark m-0 mt-[4.5rem] font-coolvetica-56 text-[3.5rem] font-[400]">
          Apply Now for Placement Opportunities.
        </h1>
        <h1 className="sm:hidden block text-text-dark m-0 mt-[4.5rem] font-coolvetica-56 text-[2.3rem] font-[400]">
          Book Your Free Trial.
        </h1>

        <h3 className="my-[1.5rem] sm:my-[1.5rem] text-text-medium font-poppins-regular-20 text-[14px] sm:text-[1.5rem] font-[400] leading-[120%]">
          Your privacy is important to us. Your information will only be used
          for processing your application
        </h3>
        <p className="hidden sm:block text-text-medium font-poppins-regular-20 font-[400] leading-[120%]">
          Step into the world of industry insights with our Placement Program.
          Explore the inner workings of different sectors, from tech startups to
          multinational corporations. Immerse yourself in projects that matter,
          work alongside experts, and gain a deep understanding of your field's
          dynamics. Beyond the hands-on experience, our placements offer a
          chance to refine your problem-solving skills, network with
          professionals, and open doors to a world of career possibilities
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
                  label="Address"
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
                  label="Name of educational institution"
                  name="currentCompany"
                  onChange={handleChange}
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-[1.5rem] w-full">
                <SubInput
                  label="Current  company "
                  name="highestEducationalQualification"
                  onChange={handleChange}
                />
                <SubInput
                  label="Total Experience"
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
              <div className="flex sm:flex-row flex-col gap-[1.5rem] w-full">
                <SubInput
                  label="Resume/CV Upload  "
                  name="highestEducationalQualification"
                  onChange={handleChange}
                  type="file"
                />
                <SubInput
                  label="Cover Letter"
                  name="currentCompany"
                  onChange={handleChange}
                  type="file"
                />
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
              <div className=" justify-center hidden sm:flex">
                <ButtonPrimary text="Apply Now" onclick={handleSubmit} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-[4rem] sm:mx-[6.5rem] flex sm:flex-row flex-col gap-[3rem] justify-between">
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
          <ButtonPrimary text="Apply Now" onclick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Form;
