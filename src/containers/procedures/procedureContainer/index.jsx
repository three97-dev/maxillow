import React from "react";

// Assets and styles
import "./index.scss";
import proceduresBgImage from "../../../images/proceduresBgImage.png";
const ProcedureContainer = ({ children, patternGroupTwo }) => {
  return (
    <div
      className="procedure-main-container overflow-x-hidden relative px-[30px] md:px-20 lg:px-[10.5%] 3xl:max-w-[1536px] mx-auto 3xl:px-0 3xl:overflow-x-visible"
      id="main-content"
    >
      <img
        src={proceduresBgImage}
        className="absolute hidden xl:inline-block top-[-55px] right-[-98px] xl:top-[-20px]"
      />
      {children}
    </div>
  );
};

export default ProcedureContainer;
