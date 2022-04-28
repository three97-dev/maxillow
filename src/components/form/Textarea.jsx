import React from "react";

const Textarea = ({ name, label, isLabelLeft, className }) => {
  return (
    <div className={`flex flex-col my-[9px] md:my-[10px] ${isLabelLeft && "md:flex-row md:items-center"} ${className}`}>
      {label && (
        <span
          className={`leading-[26px] mb-4 ${
            isLabelLeft ? "md:mb-0 md:mr-4 whitespace-nowrap" : "md:text-[22px] md:mb-5"
          }`}
        >
          {label}
        </span>
      )}
      <textarea
        name={name}
        className="w-full h-[100px] md:h-[50px] py-3 px-5 rounded-lg outline-none border-none newInsetShadow text-[16px] leading-[26px] resize-none print-visible"
      />
    </div>
  );
};

export default Textarea;
