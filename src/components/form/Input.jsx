import React from "react";
import InputMask from "react-input-mask";

const inputStyles = "w-full py-3 px-5 rounded-lg outline-none border-none text-[16px] leading-[26px]";

const Input = ({ name, label, value, placeholder, onChange, type, isLabelRight, isError, className }) => {
  return (
    <div
      className={`grid content-start gap-y-4 md:gap-y-5 my-[9px] md:my-[10px] ${
        isLabelRight && "grid-cols-[122px,auto] gap-x-4 items-center"
      } ${className}`}
    >
      {!isLabelRight && <h3>{label}</h3>}
      {type === "date" ? (
        <InputMask
          mask="99/99/9999"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`${inputStyles} ${isError ? "ring-2 ring-danger" : "newInsetShadow"}`}
        />
      ) : (
        <input
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          type={type || "text"}
          className={`${inputStyles} ${isError ? "ring-2 ring-danger" : "newInsetShadow"}`}
        />
      )}
      {isLabelRight && label}
    </div>
  );
};

export default Input;
