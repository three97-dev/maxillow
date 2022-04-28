import React from "react";

const Input = ({ name, placeholder, type, className }) => {
  return (
    <div className={`w-full ${className}`}>
      <input
        name={name}
        placeholder={placeholder}
        type={type || "text"}
        className="w-full py-[13px] px-5 rounded-lg outline-none border border-primary"
      />
    </div>
  );
};

export default Input;
