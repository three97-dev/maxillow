import React from "react";
import { FaCheck } from "react-icons/fa";
import Checkbox from "react-custom-checkbox";

const MyCheckbox = (props) => {
  return (
    <Checkbox
      icon={<FaCheck style={{ color: "#2fc0cc" }} />}
      style={{
        padding: 3,
        boxShadow: "inset 0 0 7px #00000029",
        WebkitBoxShadow: "inset 0 0 7px #00000029",
        MozBoxShadow: "inset 0 0 7px #00000029",
      }}
      className="my-checkbox newInsetShadow"
      labelStyle={{ color: "#2d2d2d", marginLeft: 10 }}
      borderWidth={0}
      size={20}
      containerClassName="mb-4 md:mb-0 cursor-pointer"
      {...props}
    />
  );
};

export default MyCheckbox;
