import React from "react";

// Assets and styles
import "./index.scss";
import proceduresBgImage from "../../../images/proceduresBgImage.png";
const ProcedureContainer = ({ children, patternGroupTwo }) => {
  return (
    <div
      className="procedure-main-container relative px-[30px] md:px-20 lg:px-[10.5%] 3xl:max-w-[1536px] mx-auto 3xl:px-0"
      id="main-content"
    >
      <img
        src={proceduresBgImage}
        className="absolute hidden lg:inline-block top-[-35px] right-[-98px] z-20 xl:top-[-11px]"
      />
      {children}
    </div>
  );
};

export default ProcedureContainer;
