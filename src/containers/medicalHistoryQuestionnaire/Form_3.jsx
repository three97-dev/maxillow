import React from "react";
import Input from "../../components/form/Input";
import RadioButtonsGroup from "../../components/form/RadioButtonsGroup";

const Form_3 = () => {
  return (
    <div className="px-[30px] px-[30px] md:px-[81px] lg:px-[142px] 2xl:px-[140px] py-5 md:pt-4 md:pb-7">
      <h2>Additional Details</h2>
      <div className="grid gap-y-4 content-between md:w-[650px] my-2.5 md:mt-4">
        <h3>Please provide your approximate:</h3>
        <div className="flex flex-col md:flex-row">
          <Input label="Height (cm)" name="Height (cm)" isLabelRight className="my-0 md:my-1" />
          <Input label="Weight (lbs)" name="Weight (lbs)" isLabelRight className="my-1.5 md:my-1 md:ml-[58px]" />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="grid gap-y-4 md:gap-y-9 content-between md:w-[690px] my-2.5 md:mt-2 md:mb-0">
          <h3>Are you or is there a chance you might be pregnant?</h3>
          <div className="flex">
            <RadioButtonsGroup
              name="Are you or is there a chance you might be pregnant?"
              options={["Yes", "No"]}
              className="ml-8 first:ml-0 mb-1.5"
            />
          </div>
        </div>
        <div className="grid gap-y-4 md:gap-y-9 content-between my-2.5 md:mt-2 md:mb-0">
          <h3>Are you currently nursing?</h3>
          <div className="flex">
            <RadioButtonsGroup
              name="Are you currently nursing?"
              options={["Yes", "No"]}
              className="ml-8 first:ml-0 mb-0"
            />
          </div>
        </div>
      </div>
      <hr className="mt-8 mb-7 md:my-16 border-[#707070]" />
      <h3>I certify that the above information is accurate to the best of my knowledge:</h3>
      <div className="mt-[5px] md:mt-[26px] grid gap-x-4 grid-cols-1 md:grid-cols-[66.4%,auto]">
        <Input label="Signature of patient, parent or guardian:" name="Signature of patient, parent or guardian" />
        <Input label="Date:" name="Signature Date" />
      </div>
      <div className="mt-6 mb-7 md:my-[54px] grid justify-center">
        <button
          type="submit"
          className="px-[52px] md:px-[104px] py-[9px] border-2 rounded-full uppercase mx-auto align-middle border-primary text-primary hover:bg-primary hover:text-white text-[14px] leading-[18px] hover:cursor-pointer transition-all duration-150"
        >
          Submit
        </button>
      </div>
      <h2 className="text-center leading-[30px] md:leading-[36px] md:mt-16 mb-14 md:mb-8 md:max-w-[812px] mx-auto print-hidden">
        Upon submission, this form will be sent directly to our administration staff. Thank you for completing.
      </h2>
    </div>
  );
};

export default Form_3;
