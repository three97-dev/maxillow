import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import { useState } from "react";

const Dropdown_2 = ({ option, placeholder, name }) => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.textContent);
    setActive(false);
  };

  let header = placeholder;
  if (selected) {
    header = selected;
  }
  console.log(header);

  return (
    <div
      className="w-full  rounded-lg outline-none border-none shadow-inner overflow-hidden relative"
      role="dd-wrapper"
    >
      <div
        className="border-b-2 "
        role="dd-header"
        onClick={() => setActive((previous) => !previous)}
      >
        <div
          className={`p-3 ${selected || "text-[#707070]"} `}
          role="dd-header-title "
        >
          {header}
        </div>
        <span className="absolute top-5 right-6 text-[#2fc0cc]">
          {active ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {active && (
        <div role="list" role="dd-list">
          {option.map((opt, idx) => (
            <div
              className="hover:bg-[#91d6e3] p-3"
              role="dd-list-item"
              key={idx}
              value={opt}
              onClick={handleSelect}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
      <input type="hidden" name={name} value={selected} />
    </div>
  );
};

export default Dropdown_2;
