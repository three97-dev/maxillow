import React from "react";

// Assets and Styles
import "./index.scss";
import homeBgPattern from "../../images/homeBgPattern.svg";

const FacilitiesContainer = ({ children }) => {
  return (
    <div
      className="relative overflow-hidden flex flex-col px-[30px] md:px-[81px] lg:px-[142px] 2xl:px-[140px] mx-auto"
      id="main-content"
      style={{
        backgroundImage: `url(${homeBgPattern})`,
      }}
    >
      <div className="z-20">{children}</div>
    </div>
  );
};

export default FacilitiesContainer;
