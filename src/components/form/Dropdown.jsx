import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import { useState } from "react";

const Dropdown = ({ option, placeholder, name, label, className }) => {
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

  return (
    <div className={`grid gap-y-4 md:gap-y-5 my-2.5 md:my-[10px] ${className}`}>
      <h3>{label}</h3>
      <div
        className="dropdown-wrapper w-full rounded-lg outline-none border-none newInsetShadow overflow-hidden relative cursor-pointer"
        role="dd-wrapper"
      >
        <div
          className={`${active && "border-b-2"}`}
          role="dd-header"
          onClick={() => setActive((previous) => !previous)}
        >
          <div className={`py-3.5 px-5 ${selected || "text-black/[0.5]"} `} role="dd-header-title ">
            {header}
          </div>
          <span className="dropdown-arrow absolute top-[17px] right-[18px] text-[#2fc0cc]">
            {active ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
        {active && (
          <div role="list" role="dd-list">
            {option.map((opt, idx) => (
              <div className="hover:bg-[#91d6e3] py-3.5 px-5" role="dd-list-item" key={idx} value={opt} onClick={handleSelect}>
                {opt}
              </div>
            ))}
          </div>
        )}
        <input type="hidden" name={name} value={selected} />
      </div>
    </div>
  );
};

export default Dropdown;
