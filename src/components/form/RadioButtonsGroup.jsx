import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const RadioButtonsGroup = ({ name, options, className }) => {
  const [active, setActive] = useState();

  return (
    <>
      {options.map((option, index) => {
        const isChecked = active === index;
        return (
          <label key={index} className={`flex items-center mb-[18px] md:mb-0 ${className}`}>
            <span>
              <div className="flex items-center justify-center h-5 w-5 p-[3px] rounded-[5px] my-checkbox newInsetShadow">
                {isChecked && <FaCheck style={{ color: "#2fc0cc" }} />}
                <input
                  type="radio"
                  name={name}
                  value={option}
                  className="hidden"
                  onChange={() => setActive(index)}
                  checked={isChecked}
                />
              </div>
            </span>
            <span className="ml-[10px]">{option}</span>
          </label>
        );
      })}
    </>
  );
};

export default RadioButtonsGroup;
