import React from "react";

// Assets and styles
import "./index.scss";
import proceduresBgImage from "../../../images/proceduresBgImage.png";
const ProcedureContainer = ({ children, patternGroupTwo }) => {
  return (
    <div
      className="procedure-main-container overflow-hidden relative px-[30px] sm:px-[81px] xl:px-[140px] mx-auto"
      id="main-content"
    >
      <img
        src={proceduresBgImage}
        className="absolute hidden xl:inline-block top-[-55px] right-[-98px] xl:top-[-20px] z-[-1] opacity-[0.15]"
      />
      {children}
    </div>
  );
};

export default ProcedureContainer;
