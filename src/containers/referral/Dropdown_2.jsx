import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
// import ArrowUp from "./svg/arrow_up.svg";
// import ArrowDown from "./svg/arrow_down.svg";

import { useState } from "react";

const Dropdown_2 = ({ option, placeholder }) => {
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
          className={`p-3 ${selected || "text-[#9AA1AD]"} `}
          role="dd-header-title "
        >
          {header}
        </div>
        <span className="absolute top-5 right-8 text-secondary">
          {active ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {active && (
        <div role="list" role="dd-list">
          {option.map((opt) => (
            <div
              className="hover:bg-secondary p-3"
              role="dd-list-item"
              value={opt.title}
              onClick={handleSelect}
            >
              {opt.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown_2;
