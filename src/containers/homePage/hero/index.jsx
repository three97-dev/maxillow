import React, { useRef } from "react";
import { getSrcSet, useWindowSize } from "../../../hooks/getWidth";

import "./index.scss";

function HeroSection({ doctors, ...props }) {
  const { welcomeTitle, mainHeading, heroDescription, heroImage } =
    props.data;

  const imgRef = useRef(null);
  const imgSize = useWindowSize(imgRef);

  return (
    <div className="home-hero-wrapper">
      <div className="flex items-center w-full h-full relative overflow-hidden lg:overflow-visible">
        <div className="home-hero-image-wrapper">
          <div className="home-hero-image-cutter">
            <img
              className="w-full"
              ref={imgRef}
              srcSet={getSrcSet(heroImage.file?.url, imgSize.width)}
              alt="Hero image"
              loading="eager"
            />
          </div>
        </div>
        <div className="home-hero-intro-wrapper">
          <div className="home-hero-intro">
            <div className="w-full md:w-[500px] lg:w-[443px] mx-auto">
              <h4 className="uppercase mt-[-2px] sm:mt-[-1px]">{welcomeTitle}</h4>
              <h1 className="tracking-[0.4px] font-NeutraDisplay font-bold text-[#473C3F] uppercase py-3 mt-[-4px] sm:mt-0 lg:mt-[-5px]">
                {mainHeading}
              </h1>
              <div className="lg:text-[#696969] mt-[1px] md:mt-[13px]">{heroDescription}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-hero-bar">
        <div className="flex content-center items-center h-full">
          {doctors.map(({ node: { title } }, i) => {
            const isLastDoctor = i === doctors.length - 1;
            return (
              <div
                className={`flex text-center items-center w-full h-[30px] 2xl:h-[40px] ${
                  !isLastDoctor ? "border-r border-secondary" : ""
                }`}
              >
                <h4 className="flex-1 uppercase text-[#473C3F] 2xl:font-semibold">
                  {title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
