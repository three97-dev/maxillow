import React from "react"

// Assets and Styles
import "./index.scss"
import homeBgPattern from "../../images/homeBgPattern.svg"
import PatternBlue from "../../images/pattern-blue.svg"

const FacilitiesContainer = ({ children }) => {
  return (
    <div
      className="relative pb-10 md:pb-24 lg:pb-24 overflow-hidden flex flex-col"
      id="main-content"
      style={{
        backgroundImage: `url(${homeBgPattern})`,
      }}
    >
      <img src={PatternBlue} className="facilities-top-corner-pattern z-10" alt="" />
      <div className="z-20">{children}</div>
      <img src={PatternBlue} className="facilities-footer-pattern z-10" alt="" />
    </div>
  )
}

export default FacilitiesContainer
