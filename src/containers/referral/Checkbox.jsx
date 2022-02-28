import React from "react";
import { FaCheck } from "react-icons/fa";
import Checkbox from "react-custom-checkbox";

const MyCheckbox = (props) => {
  return (
    <>
      <Checkbox
        icon={<FaCheck style={{ color: "#2fc0cc" }} />}
        style={{
          padding: 3,
          "box-shadow": "inset 0 0 4px #b9b5b5",
          "-webkit-box-shadow: ": "inset 0 0 4px #b9b5b5",
          "-moz-box-shadow": "inset 0 0 4px #b9b5b5",
        }}
        className="my-checkbox"
        labelStyle={{ color: "#2d2d2d", "margin-left": 10 }}
        borderWidth={0}
        size={22}
        containerClassName="mb-2"
        {...props}
      />
    </>
  );
};

export default MyCheckbox;
