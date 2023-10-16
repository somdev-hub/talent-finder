import { steps } from "../../assets/data/steps";

const Steps = () => {
  return (
    <div className="px-[1.5rem] py-[2.5rem]  sm:p-[5rem] lg:p-[3rem] xl:p-[5rem] flex flex-col items-center justify-center text-center">
      <h2 className="w-[332px] sm:w-auto text-[2rem] sm:text-[3.5rem] font-[400] font-coolvetica-56 m-0">
        <span className="text-text-dark">Top-quality remote hiring in </span>
        <span className="text-blue-shade">4 simple steps</span>
      </h2>
      {/* fixed bugs : added responsive width */}
      <p className="w-[352px] sm:w-auto font-[400] sm:text-[1.25rem] font-poppins-regular-20 text-text-medium m-0 mt-8">
        Begin your journey today or preview a sample profile. <br />
        Your next career move awaits!
      </p>
      {/* <div className="flex xl:flex-row flex-col gap-[3.5rem] sm:gap-0 mt-8 sm:mt-[4rem] xl:items-end">
        {steps.map((step, index) => {
          return (
            <div
              className="flex flex-col items-center justify-center gap-[1rem]"
              key={index}
            >
              <img src={step.img} alt="" />
              <h3 className="w-[300px]  text-[1.5rem] font-[500] font-poppins-regular-20 leading-[120%] m-0">
                {step.title}
              </h3>
              <p className="min-w-[250px] max-w-[250px] text-text-medium font-[400] leading-[120%] font-poppins-regular-20 m-0">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div> */}
      <div className="flex flex-wrap gap-[3.5rem] mt-8 sm:mt-[4rem] flex-col lg:flex-row justify-center">
  {steps.map((step, index) => (
    <div
      className="flex flex-col items-center justify-center gap-[1rem] max-w-[300px]"
      key={index}
    >
      <img src={step.img} alt="" />
      <h3 className="text-[1.5rem] font-[500] font-poppins-regular-20 leading-[120%] m-0">
        {step.title}
      </h3>
      <p className="w-auto xl:w-[250px] text-text-medium font-[400] leading-[120%] font-poppins-regular-20 m-0 text-center">
        {step.desc}
      </p>
    </div>
  ))}
</div>

    </div>
  );
};

export default Steps;
