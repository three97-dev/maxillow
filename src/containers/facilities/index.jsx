import React from "react";

// Assets and Styles
import "./index.scss";
import patternBlue from "../../images/pattern-blue.svg";

const FacilitiesContainer = ({ children }) => {
  return (
    <div
      className="relative overflow-hidden flex flex-col px-[30px] md:px-[81px] lg:px-[142px] 2xl:px-[140px] mx-auto"
      id="main-content"
    >
      <img
        src={patternBlue}
        className="absolute hidden lg:block right-[-72px] top-[43px] h-[240px] w-[110px]"
      />
      <div className="z-20">{children}</div>
    </div>
  );
};

export default FacilitiesContainer;
