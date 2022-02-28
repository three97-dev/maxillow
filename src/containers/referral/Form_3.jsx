import React, { useState } from "react";
import DOB from "./DOB";

const Form_2 = () => {
  const [insuranceInformationTextareaValue, setInsuranceInformationTextareaValue] = useState("");

  return (
    <div className="p-8 pt-10 px-[30px] md:px-[81px] lg:px-[142px] 2xl:px-[140px]">
      <h1>Patient Information</h1>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="mt-4 mb-3  md:w-[49%]">
          <input
            name="name"
            placeholder="Name"
            type="text"
            className=" w-full p-3 rounded-lg outline-none border-none shadow-inner insetShadow"
          />
        </div>
        <div className="my-3 md:w-[49%] text-[#707070]">
          <DOB />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="my-3 md:w-[49%]">
          <input
            name="phone"
            placeholder="Phone"
            type="number"
            className="w-full p-3 rounded-lg outline-none border-none shadow-inner insetShadow"
          />
        </div>
        <div className="my-3 md:w-[49%]">
          <input
            name="email"
            placeholder="Email"
            type="email"
            className="w-full p-3 rounded-lg outline-none border-none shadow-inner insetShadow"
          />
        </div>
      </div>

      <div>
        <textarea
          name="Insurance Information"
          rows="3"
          cols="50"
          placeholder="Insurance Information"
          value={insuranceInformationTextareaValue}
          onChange={(e) => setInsuranceInformationTextareaValue(e.target.value)}
          className="w-full p-3 rounded-lg outline-none border-none shadow-inner insetShadow my-3"
        ></textarea>
        <div className="textarea-div hidden w-full min-h-[114px] p-3 my-3 rounded-lg border border-[#808080]">
          {insuranceInformationTextareaValue}
        </div>
      </div>

      <hr className=" border-t-2 border-secondary  mt-12" />
    </div>
  );
};

export default Form_2;
