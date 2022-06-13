import React from "react";

const Form_5 = () => {
  return (
    <div className="px-[30px] lg:px-[81px] 2xl:px-[140px] py-6">
      <input
        name="Referring Doctor Signature"
        placeholder="Referring Doctor Signature"
        type="text"
        className="w-full p-3 rounded-lg outline-none border-none shadow-inner insetShadow"
      />

      <div className="flex justify-center">
        <button
          type="submit"
          className="inline-block px-14 3xl:px-20 py-2 border-2 rounded-full uppercase  my-20 mx-auto align-middle border-primary text-primary hover:bg-primary hover:text-white hover:cursor-pointer transition-all duration-150"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form_5;
