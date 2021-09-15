import React, { useRef } from "react";
import { Link } from "gatsby";

import { getSrcSet, useWindowSize } from "../../../hooks/getWidth";
import { RightArrow } from "../../../components/icons";
import RRenderer from "../../../components/richtextRenderer";

import "./index.scss";
import bgPattern from "../../../images/home-service-bg-pattern.svg";
import bgMdPattern from "../../../images/home-service-bg-pattern-md.svg";
import bgFriendlyPattern from "../../../images/home-service-friendly-bg.svg";
import bgLgFriendlyPattern from "../../../images/home-service-friendly-bg-lg.svg";
import Pattern from "../../../images/pattern.svg";
import PatternBlue from "../../../images/pattern-blue.svg";

function Service({ footer2, addBlob, orangeDots, blueDots, ...props }) {
  const imgRef = useRef(null);
  const imgSize = useWindowSize(imgRef);

  return (
    <div
      className="2xl:max-w-[1236px] mx-auto 2xl:px-0 home-service-main-container px-[30px] py-[50px] md:px-20 lg:px-[10.5%] xl:py-20"
      id={props.title.toLowerCase().split(" ").join("-")}
    >
      <div
        className={`flex-col-reverse flex gap-[50px] lg:gap-[17px] relative ${
          props.isCentered
            ? ""
            : props.reverse
            ? "lg:flex-row-reverse justify-between"
            : "lg:flex-row"
        }`}
      >
        {blueDots && <img src={PatternBlue} className="blue-pattern" alt="" />}
        <div className="z-20 w-full relative flex-1">
          {addBlob && (
            <>
              <div className="home-section-bg md:hidden lg:block">
                <img
                  className="w-full lg:h-full lg:w-auto"
                  src={bgPattern}
                  alt=""
                />
              </div>
              <div className="hidden md:block home-section-bg lg:hidden">
                <img className="w-full" src={bgMdPattern} alt="" />
              </div>
            </>
          )}
          {blueDots && (
            <div className="relative">
              <img
                src={bgFriendlyPattern}
                className="w-full lg:hidden"
                alt=""
              />
              <img
                src={bgLgFriendlyPattern}
                className="w-full hidden lg:block mb-5"
                alt=""
              />
              {props.isCentered && (
                <img
                  className="z-10 absolute bottom-0 w-full lg:max-w-[706px] lg:-bottom-5 lg:left-1/2 lg:transform lg:-translate-x-1/2"
                  srcSet={getSrcSet(props.image?.file?.url, imgSize.width)}
                  ref={imgRef}
                  alt=""
                  loading="lazy"
                />
              )}
            </div>
          )}

          <div className="relative flex lg:h-full">
            {orangeDots && (
              <img src={Pattern} className="orange-pattern" alt="" />
            )}
            {!props.isCentered && (
              <img
                className={`z-10 min-w-[88%] md:min-w-[75%] mx-auto lg:h-full lg:min-w-[auto] lg:absolute ${
                  props.reverse && "lg:right-0 lg:max-w-[80%] lg:w-[417px]"
                }`}
                srcSet={getSrcSet(props.image?.file?.url, imgSize.width)}
                ref={imgRef}
                alt=""
                loading="lazy"
              />
            )}
          </div>

          <div
            className={`${!blueDots && "mt-[50px]"} ${
              !props.isCentered ? "lg:hidden" : ""
            }`}
          >
            <div
              className={` home-section-footer  px-5 pt-[38px] pb-11 ${
                footer2 ? "footer-2" : ""
              } flex items-center`}
            >
              <div className="flex-1">
                <h2 className="uppercase">{props.footer.subTitle}</h2>
                <h3 className="uppercase">{props.footer.title}</h3>
              </div>
              <div>
                <Link to={props.footer.link}>
                  <RightArrow
                    size={46}
                    color={footer2 ? "#2FC0CC" : "#F68C45"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 z-10">
          <h3
            className={`text-center pb-[34px] ${
              props.isCentered ? " lg:pb-6" : "lg:text-left"
            }`}
          >
            {props?.title}
          </h3>
          {props.subTitle && (
            <p
              className={`text-sm md:text-xl py-1 ${
                props.isCentered ? "text-center" : ""
              }`}
            >
              {props.subTitle}
            </p>
          )}
          <div
            className={`w-full lg:w-full mx-auto text-sm md:text-sm ${
              props.isCentered ? "text-center" : ""
            }`}
          >
            <RRenderer
              data={props.description}
              config={{
                p: "mt-4 lg:max-w-[711px] lg:mx-auto md:text-xl",
              }}
            />

            {!props.isCentered && (
              <div
                className={`home-section-footer  px-5 pt-[38px] pb-11 ${
                  footer2 ? "footer-2" : ""
                }  items-center mt-16 hidden lg:flex`}
              >
                <div className="flex-1">
                  <h2 className="uppercase">{props.footer.subTitle}</h2>
                  <h3 className="uppercase">{props.footer.title}</h3>
                </div>
                <div className="h-12 w-12">
                  <Link to={props.footer.link}>
                    <RightArrow
                      size={46}
                      color={footer2 ? "#2FC0CC" : "#F68C45"}
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
