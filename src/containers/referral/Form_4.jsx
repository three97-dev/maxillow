import React from "react";
const Form_4 = () => {
  return (
    <div className=" p-8 md:px-30 xl:px-60 ">
      <h1>Patient Details</h1>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="my-4 md:w-[49%]">
          <h6 className="uppercase text-[#707070] mt-4">
            Anesthetic Preference:
          </h6>

          <div className="mt-3 mb-3">
            <label className="mt-4 ml-3">
              <input
                name="Anesthetic Preference[]"
                type="checkbox"
                value="Local"
                className=" w-4 h-4"
              />
              <span className="ml-3">Local</span>
              Local
            </label>
            <br />
            <label className="mt-4 ml-3">
              <input
                type="checkbox"
                name="Anesthetic Preference[]"
                value="Sedation"
                className=" w-4 h-4"
              />
              <span className="ml-3">Sedation</span>
              Sedation
            </label>
            <br />
            <label className="mt-4 ml-3">
              <input
                type="checkbox"
                name="Anesthetic Preference[]"
                value="General"
                className=" w-4 h-4"
              />
              <span className="ml-3">General</span>
            </label>
            <br />
          </div>
        </div>
        <div className="my-4 md:w-[49%]">
          <h6 className="uppercase text-[#707070] mt-4 ">Radiograph:</h6>

          <div className="mt-3 mb-3">
            <label className="mt-4 ml-3">
              <input
                type="checkbox"
                name="Radiograph[]"
                value="Emailed"
                className=" w-4 h-4"
              />
              <span className="ml-3">Emailed</span>
            </label>
            <br />
            <label className="mt-4 ml-3">
              <input
                type="checkbox"
                name="Radiograph[]"
                value="Enclosed"
                className=" w-4 h-4"
              />
              <span className="ml-3">Enclosed</span>
            </label>
            <br />
            <label className="mt-4 ml-3">
              <input
                type="checkbox"
                name="Radiograph[]"
                value="Please Take"
                className=" w-4 h-4"
              />
              <span className="ml-3">Please Take</span>
            </label>
            <br />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mt-4 md:w-[49%]">
          <input
            name="Supernumerary (99), Qty."
            placeholder="Supernumerary (99), Qty."
            type="text"
            className="w-full p-3 rounded-lg outline-none border-none shadow-inner"
          />
        </div>
        <div className="mt-4 md:w-[49%]">
          <input
            name="Location"
            placeholder="Location"
            type="text"
            className="w-full p-3 rounded-lg outline-none border-none shadow-inner"
          />
        </div>
      </div>
      <div>
        <textarea
          name="Medical Alert"
          rows="3"
          cols="50"
          placeholder="Medical Alert"
          className="w-full p-3 rounded-lg outline-none border-none shadow-inner mt-7  mt-"
        ></textarea>
      </div>
      <div>
        <textarea
          name="Additional Notes"
          rows="3"
          cols="50"
          placeholder="Additional Notes"
          className="w-full p-3 rounded-lg outline-none border-none shadow-inner mt-5"
        ></textarea>
      </div>
      <hr className=" border-t-2 border-secondary  mt-12" />
    </div>
  );
};

export default Form_4;
