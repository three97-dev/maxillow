import React, { useState } from "react";
import MyCheckbox from "./Checkbox";

const Form_4 = () => {
  const [medicalAlertTextareaValue, setMedicalAlertTextareaValue] = useState("");
  const [additionalNotesTextareaValue, setAdditionalNotesTextareaValue] = useState("");

  return (
    <div className="px-[30px] lg:px-[81px] 2xl:px-[140px] py-6">
      <h1>Patient Details</h1>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="my-4 md:w-[49%]">
          <h6 className="uppercase text-[#707070] mt-4">
            Anesthetic Preference:
          </h6>

          <div className="mt-3 mb-3">
            <MyCheckbox
              label="Local"
              name="Anesthetic Preference[]"
              value="Local"
            />

            <MyCheckbox
              label="Sedation"
              name="Anesthetic Preference[]"
              value="Sedation"
            />

            <MyCheckbox
              label="General"
              name="Anesthetic Preference[]"
              value="General"
            />
          </div>
        </div>
        <div className="my-4 md:w-[49%]">
          <h6 className="uppercase text-[#707070] mt-4 ">Radiograph:</h6>

          <div className="mt-3 mb-3">
            <MyCheckbox
              label="Emailed"
              name="Anesthetic Preference[]"
              value="Emailed"
            />

            <MyCheckbox
              label="Enclosed"
              name="Anesthetic Preference[]"
              value="Enclosed"
            />

            <MyCheckbox
              label="Please Take"
              name="Anesthetic Preference[]"
              value="Please Take"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mt-4 md:w-[49%]">
          <input
            name="Supernumerary (99), Qty."
            placeholder="Supernumerary (99), Qty."
            type="text"
            className="w-full p-3 rounded-lg outline-none border-none shadow-inner insetShadow"
          />
        </div>
        <div className="mt-4 md:w-[49%]">
          <input
            name="Patient Location"
            placeholder="Location"
            type="text"
            className="w-full p-3 rounded-lg outline-none border-none shadow-inner insetShadow"
          />
        </div>
      </div>
      <div className="hidden print-visible mt-[220px]"></div>
      <div>
        <textarea
          name="Medical Alert"
          rows="3"
          cols="50"
          placeholder="Medical Alert"
          value={medicalAlertTextareaValue}
          onChange={(e) => setMedicalAlertTextareaValue(e.target.value)}
          className="w-full p-3 rounded-lg outline-none border-none shadow-inner insetShadow mt-7"
        ></textarea>
        <div className="textarea-div hidden w-full min-h-[114px] p-3 mt-7 rounded-lg border border-[#808080]">
          {medicalAlertTextareaValue}
        </div>
      </div>
      <div>
        <textarea
          name="Additional Notes"
          rows="3"
          cols="50"
          placeholder="Additional Notes"
          value={additionalNotesTextareaValue}
          onChange={(e) => setAdditionalNotesTextareaValue(e.target.value)}
          className="w-full p-3 rounded-lg outline-none border-none shadow-inner insetShadow mt-5"
        ></textarea>
        <div className="textarea-div hidden w-full min-h-[114px] p-3 mt-5 rounded-lg border border-[#808080]">
          {additionalNotesTextareaValue}
        </div>
      </div>
      <hr className=" border-t-2 border-secondary  mt-12" />
    </div>
  );
};

export default Form_4;
