import React from "react";
import Dropdown from "./Dropdown";
const Form_1 = () => {
  return (
    <div className=" p-8 pt-20 md:px-30 xl:px-60">
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
              "First available",
            ]}
          />
        </div>
        <div className="my-4 md:w-[49%]">
          <Dropdown
            placeholder="Location"
            name="Location"
            option={["Lahore", "Moscow", "Krasnodar", "Sants Petersburg"]}
          />
        </div>

        {/* <div className="my-4 md:w-[49%]">
          <Dropdown
            name="Surgeon"
            placeholder="Surgeon"
            option={[
              "Dr. Kurt Scherle",
              "Dr. Kevin Vint",
              "Dr. Jeff Bassey",
              "Dr. Victor Le",
              "First available",
            ]}
          />
        </div> */}
        {/* <div className="my-4 md:w-[49%]"> */}
        {/* <select
            name="surgeon"
            class="w-full p-3 rounded-lg outline-none border-none shadow-inner"
          >
            <option value="not-selected" disabled selected>
              Surgeon
            </option>
            <option value="Dr.KurtScherle">Dr. Kurt Scherle</option>
            <option value="Dr.KevinVint">Dr. Kevin Vint</option>
            <option value="Dr.JeffBassey">Dr. Jeff Bassey</option>
            <option value="Dr.VictorLe">Dr. Victor Le</option>
            <option value="first-available">First available</option>
          </select> */}
        {/* </div> */}
        {/* <div className=" my-4 md:w-[49%]">
          <select
            name="location"
            class="w-full p-3 rounded-lg outline-none border-none shadow-inner"
          >
            <option value="location" disabled selected>
              Location
            </option>
            <option value="Lahore">Lahore</option>
            <option value="Macau">Macau</option>
            <option value="Bangkok">Bangkok</option>
            <option value="SaintPetersburg">Saint Petersburg</option>
          </select>
        </div> */}
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="my-4 md:w-[49%]">
          <input
            name="Referring Doctor Name"
            placeholder="Referring Doctor Name"
            type="text"
            className="w-full p-3 rounded-lg outline-none border-none shadow-inner"
          />
        </div>
        <div className="my-4 md:w-[49%]">
          <input
            name="Referring Doctor Phone"
            placeholder="Referring Doctor Phone"
            type="text"
            className="w-full p-3 rounded-lg outline-none border-none shadow-inner"
          />
        </div>
      </div>
      <hr className=" border-t-2 border-secondary mt-12" />
    </div>
  );
};

export default Form_1;
