import React from "react";
import Dropdown from "./Dropdown";
const Form_1 = () => {
  return (
    <div className="mt-16 px-[30px] lg:px-[81px] 2xl:px-[140px] py-6">
      <h1>Referral Information</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="my-4 md:w-[49%]">
          <Dropdown
            placeholder="Surgeon"
            name="Surgeon"
            option={[
              "Dr. Kurt Scherle",
              "Dr. Kevin Vint",
              "Dr. Jeff Bassey",
              "Dr. Victor Le",
              "Dr. Ryan Howard",
              "First available",
            ]}
          />
        </div>
        <div className="my-4 md:w-[49%]">
          <Dropdown
            placeholder="Location"
            name="Location"
            option={[
              "Maxillo East - Henderson Hwy",
              "Maxillo West - Portage Ave",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="my-4 md:w-[49%]">
          <input
            name="Referring Doctor Name"
            placeholder="Referring Doctor Name"
            type="text"
            className="w-full p-3 rounded-lg outline-none border-none shadow-inner insetShadow"
          />
        </div>
        <div className="my-4 md:w-[49%]">
          <input
            name="Referring Doctor Phone"
            placeholder="Referring Doctor Phone"
            type="number"
            className="w-full p-3 rounded-lg outline-none border-none shadow-inner insetShadow"
          />
        </div>
      </div>
      <hr className=" border-t-2 border-secondary mt-12" />
    </div>
  );
};

export default Form_1;
