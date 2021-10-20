import React, { useState } from "react";
import "./custom_forms.css";

const Dropdown = ({ placeholder, option, name }) => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div
      className="select"
      onClick={() => setActive((prevValue) => !prevValue)}
    >
      <input type="radio" name={`${name}`} />

      {active ? (
        <i className="toggle icon icon-arrow-up"></i>
      ) : (
        <i className="toggle icon icon-arrow-down"></i>
      )}
      <span className="placeholder">{`${placeholder}`}</span>
      {option.map((opt) => (
        <label
          className="option"
          style={{ display: active ? "block" : "none" }}
        >
          {console.log(opt)}
          <input type="radio" name={`${name}`} value={`${opt}`} />
          <span className={`title ${active ? "active" : ""}`}>{`${opt}`}</span>
        </label>
      ))}
    </div>
  );
};

export default Dropdown;
