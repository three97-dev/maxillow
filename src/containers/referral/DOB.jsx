import React, { useState } from "react";
const DOB = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 140;
  return (
    <div className="flex  flex-nowrap  items-center">
      <span className="uppercase">d.o.b.:</span>
      <input
        placeholder="DD"
        min="1"
        max="31"
        type="number"
        className=" w-4 flex-1  p-3 rounded-lg outline-none border-none shadow-inner insetShadow mx-5"
        onChange={(e) => setDay(e.target.value)}
      />
      <span>/</span>
      <input
        min="1"
        max="12"
        placeholder="MM"
        type="number"
        className=" w-4 flex-1  p-3 rounded-lg outline-none border-none shadow-inner insetShadow mx-5"
        onChange={(e) => setMonth(e.target.value)}
      />
      <span>/</span>
      <input
        placeholder="YYYY"
        min={minYear}
        max={currentYear}
        type="number"
        className=" w-4 flex-2  p-3 rounded-lg outline-none border-none shadow-inner insetShadow  ml-5"
        onChange={(e) => setYear(e.target.value)}
      />

      <input
        type="hidden"
        name="D.O.B. :"
        className=" w-4 flex-2  p-3 rounded-lg outline-none border-none shadow-inner insetShadow  ml-5"
        value={`${day} / ${month} / ${year}`}
      />
    </div>
  );
};

export default DOB;
