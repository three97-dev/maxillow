import React from "react";

const Input = ({ name, label, type, isLabelRight, className }) => {
  return (
    <div
      className={`grid content-start gap-y-4 md:gap-y-5 my-[9px] md:my-[10px] ${
        isLabelRight && "grid-cols-[122px,auto] gap-x-4 items-center"
      } ${className}`}
    >
      {!isLabelRight && <h3>{label}</h3>}
      <input
        name={name}
        type={type || "text"}
        className="w-full py-3 px-5 rounded-lg outline-none border-none newInsetShadow text-[16px] leading-[26px]"
      />
      {isLabelRight && label}
    </div>
  );
};

export default Input;
