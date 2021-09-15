import React, { useRef } from "react";
import { getSrcSet, useWindowSize } from "../../../hooks/getWidth";
import About from "./../../../images/about-hero-bg.png";
import ArrowDownWhite from "./../../../images/ArrowDownWhite.png";

import "./index.scss";

function HeroSection({
  backgroundColor = "primary",
  shadeLess,
  marBot,
  ...props
}) {
  const { mainHeading, shortDescription, ctaText, heroImage } =
    props.data.edges[0].node;
  const imgRef = useRef(null);
  const imgSize = useWindowSize(imgRef);

  const backgroundColorMapper = {
    primary: "#EB6024",
    bgSecondary: "#5765CE",
    grey: "#64555A",
  };

  return (
    <div className={`${marBot ? "common-hero-main-container" : ""}`}>
      <div
        className={`relative bg-cover bg-no-repeat pt-[50px] md:pt-[100px] lg:py-0 z-20 lg:min-h-[calc(100vh-80px)] lg:flex lg:items-center bg-about-container`}
      >
        <img src={About} className="w-full absolute bg-about lg:hidden" />
        <div className="relative container mx-auto max-w-7xl flex flex-col justify-center lg:pb-0 lg:max-w-[900px] xl:max-w-[995px]">
          <div className="lg:w-full flex lg:flex-row flex-col-reverse justify-center items-center px-[30px] mb-[60px] md:mb-[130px] lg:px-0 lg:mb-0 lg:gap-10 xl:gap-[109px] lg:min-h-[440px]">
            <div className="w-full sm:max-w-[500px] lg:flex-1 lg:h-full ">
              <img
                className="w-full"
                ref={imgRef}
                srcSet={getSrcSet(heroImage?.file?.url, imgSize?.width)}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex-1 text-center abosulte lg:m-0 max-w-[330px] mx-auto md:max-w-[500px] lg:relative">
              {props.miniHeading && (
                <h2 className="text-white uppercase mb-[15px]">
                  {props.miniHeading}
                </h2>
              )}
              <h1 className="uppercase mb-3 text-white">{mainHeading}</h1>
              <p className="text-white mb-[50px] md:mb-[100px] lg:mb-11">
                {shortDescription}
              </p>
              <div className="text-center hidden lg:block">
                <a href="#main-content">
                  <h2 className="flex-1 text-white uppercase mb-2 lg:mb-3">
                    {ctaText}
                  </h2>
                  <button>
                    <img src={ArrowDownWhite} alt="" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center block lg:hidden pb-6">
            <a href="#main-content">
              <h2 className="flex-1 text-white uppercase mb-3">{ctaText}</h2>
              <button>
                <img src={ArrowDownWhite} alt="" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
