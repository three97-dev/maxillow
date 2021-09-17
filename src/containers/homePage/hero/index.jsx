import React, { useRef } from "react";
import ScrollSpy from "react-scrollspy";
import { getSrcSet, useWindowSize } from "../../../hooks/getWidth";

import "./index.scss";
import PatternBlue from "../../../images/pattern-blue.svg";

function HeroSection({ doctors, sections, ...props }) {
  const { welcomeTitle, mainHeading, shortDescription, heroImage } =
    props.data.edges[0].node;

  const imgRef = useRef(null);
  const imgSize = useWindowSize(imgRef);

  return (
    <div className="relative global-x-spacing remove-mobile" id="home-hero">
      <div className="w-full home-header-main-container">
        <div className="w-full flex flex-col-reverse lg:flex-row relative items-center justify-center">
          <div className="text-center flex justify-center lg:justify-end w-full md:w-2/3 lg:w-5/12">
            <div className="home-header-intro">
              <h6 className="uppercase">{welcomeTitle}</h6>
              <h1 className="uppercase py-3">{mainHeading}</h1>
              <p className="lg:text-base">{shortDescription}</p>
            </div>
          </div>
          <div className="flex items-start w-full lg:w-7/12 xl:mr-8">
            <img
              className="home-header-image"
              ref={imgRef}
              srcSet={getSrcSet(heroImage.file?.url, imgSize.width)}
              alt=""
              loading="eager"
            />
          </div>
          <div className="home-header-bar hidden lg:block">
            <div className="2xl:max-w-[1850px] 2xl:mx-auto main-bar mx-8 rounded-lg px-2 py-8">
              <div className="max-w-6xl mx-auto flex items-center">
                {doctors.map(({ node: { title } }, i) => {
                  const isLastDoctor = i + 1 === doctors.length;
                  return (
                    <div
                      className={`flex-1 text-center hidden lg:block ${
                        !isLastDoctor ? "border-r border-secondary" : ""
                      }`}
                    >
                      <h6
                        className="flex-1 uppercase"
                        style={{ color: "#2D2D2D" }}
                      >
                        {title}
                      </h6>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blue-pattern-container">
        <img src={PatternBlue} className="h-full w-full" alt="" />
      </div>

      <div className="home-hero-dots">
        <ScrollSpy
          items={[
            "home-hero",
            ...sections.map((sec) => sec.toLowerCase().split(" ").join("-")),
            "home-testimonials",
          ]}
          currentClassName="active"
          offset={-500}
        >
          <li className="active">
            <a href={`#home-hero`}>a</a>
          </li>
          {sections.map((sec) => (
            <li>
              <a href={`#${sec.toLowerCase().split(" ").join("-")}`}>a</a>
            </li>
          ))}
          <li>
            <a href={`#home-testimonials`}>a</a>
          </li>
        </ScrollSpy>
      </div>

      <div className="home-hero-referral">
        <a
          className="text-primary text-sm"
          to="/"
          href="https://assets.ctfassets.net/wtwqjmvr7hi2/749ZWrb9x7zQkziRZtx96e/c9ed0696fc111c7340ac87c798c10ba4/maxillowinnipeg_referralform.pdf"
          target="_blank"
          rel="noreferrer"
        >
          MAKE A REFERRAL
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
