import React from "react";
const Form_2 = () => {
  return (
    <div className=" p-8 pt-10 md:px-30 xl:px-60 ">
      <h1>Patient Information</h1>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="mt-4 mb-3  md:w-[49%]">
          <input
            name="name"
            placeholder="Name"
            type="text"
            className=" w-full p-3 rounded-lg outline-none border-none shadow-inner"
          />
        </div>
        <div className="flex  flex-nowrap  items-center my-3 md:w-[49%] text-[#707070]">
          <span className="capitalize">d.o.b.:</span>
          <input
            name="DD"
            placeholder="DD"
            type="text"
            className=" w-4 flex-1  p-3 rounded-lg outline-none border-none shadow-inner mx-5"
          />
          <span>/</span>
          <input
            name="MM"
            placeholder="MM"
            type="text"
            className=" w-4 flex-1  p-3 rounded-lg outline-none border-none shadow-inner mx-5"
          />
          <span>/</span>
          <input
            name="YYYY"
            placeholder="YYYY"
            type="text"
            className=" w-4 flex-2  p-3 rounded-lg outline-none border-none shadow-inner  ml-5"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="my-3 md:w-[49%]">
          <input
            name="phone"
            placeholder="Phone"
            type="tel"
            className="w-full p-3 rounded-lg outline-none border-none shadow-inner"
          />
        </div>
        <div className="my-3 md:w-[49%]">
          <input
            name="email"
            placeholder="Email"
            type="email"
            className="w-full p-3 rounded-lg outline-none border-none shadow-inner"
          />
        </div>
      </div>

      <div>
        <textarea
          name="Insurance Information"
          rows="3"
          cols="50"
          placeholder="Insurance Information"
          className="w-full p-3 rounded-lg outline-none border-none shadow-inner my-3"
        ></textarea>
      </div>

      <hr className=" border-t-2 border-secondary  mt-12" />
    </div>
  );
};

export default Form_2;
