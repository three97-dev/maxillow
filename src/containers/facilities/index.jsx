import React from "react";

// Assets and Styles
import "./index.scss";
import homeBgPattern from "../../images/homeBgPattern.svg";

const FacilitiesContainer = ({ children }) => {
  return (
    <div
      className="relative overflow-hidden flex flex-col px-[30px] md:px-20 lg:px-[10.5%] 3xl:max-w-[1536px] mx-auto 3xl:px-0"
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
