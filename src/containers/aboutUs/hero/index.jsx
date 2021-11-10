import React, { useRef } from "react";
import { getSrcSet, useWindowSize } from "../../../hooks/getWidth";
import About from "./../../../images/about-hero-bg.png";
import ArrowDownWhite from "./../../../images/ArrowDownWhite.svg";

import "./index.scss";

function HeroSection({
  backgroundClass = "bg-about-container",
  shadeLess,
  marBot,
  ...props
}) {
  const { mainHeading, shortDescription, ctaText, heroImage } =
    props.data.edges[0].node;
  const imgRef = useRef(null);
  const imgSize = useWindowSize(imgRef);

  // const backgroundColorMapper = {
  //   primary: "#EB6024",
  //   bgSecondary: "#5765CE",
  //   grey: "#64555A",
  // };

  return (
    <div className={`${marBot ? "common-hero-main-container" : ""}`}>
      <div
        className={`relative bg-cover bg-no-repeat pt-[50px] md:pt-[100px] lg:py-0 z-20 lg:min-h-[calc(100vh-80px)] lg:flex lg:items-center ${backgroundClass}`}
      >
        <img src={About} className="w-full absolute bg-about lg:hidden" />
        <div className="relative container mx-auto max-w-7xl flex flex-col justify-center lg:pb-0 lg:max-w-[900px] xl:max-w-[995px] 3xl:max-w-[1502px]">
          <div className="lg:w-full flex lg:flex-row flex-col-reverse justify-center items-center px-[30px] mb-[60px] md:mb-[130px] lg:px-0 lg:mb-0 lg:space-x-10 xl:space-x-[109px] lg:min-h-[440px] 3xl:space-x-[154px]">
            <div className="w-full lg:flex-1 lg:h-full lg:w-auto">
              <img
                className="w-full"
                ref={imgRef}
                srcSet={getSrcSet(heroImage?.file?.url, imgSize?.width)}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex-1 text-center abosulte lg:m-0 max-w-[330px] mx-auto md:max-w-[500px] lg:relative lg:max-w-none">
              {props.miniHeading && (
                <h2 className="text-white uppercase mb-[15px]">
                  {props.miniHeading}
                </h2>
              )}
              <h1 className="uppercase mb-3 text-white text-[34px] leading-[36px] lg:font-extrabold 3xl:mb-[15px]">
                {mainHeading}
              </h1>
              <p className="text-white mb-[50px] md:mb-[100px] lg:mb-11 3xl:mb-[54px]">
                {shortDescription}
              </p>
              <div className="text-center hidden lg:block">
                <a href="#main-content">
                  <h6 className="flex-1 text-white uppercase mb-2 text-sm lg:mb-3">
                    {ctaText}
                  </h6>
                  <button className="border-2 border-white rounded-full p-1 w-9 h-9 3xl:w-[60px] 3xl:h-[60px] 3xl:p-2">
                    <img
                      className="transform rotate-90 w-full h-full"
                      src={ArrowDownWhite}
                      alt=""
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center block lg:hidden pb-6 md:pb-20 lg:pb-0">
            <h6 className="flex-1 text-white uppercase mb-3">{ctaText}</h6>
            <a href="#main-content">
              <button className="border-2 border-white rounded-full p-1">
                <img
                  className="transform rotate-90"
                  src={ArrowDownWhite}
                  alt=""
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
