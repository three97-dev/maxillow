import React, { useRef } from "react";
import { Link } from "gatsby";

import {
  useApplyAfterWidth,
  getSrcSet,
  useWindowSize,
} from "../../../hooks/getWidth";
import { RightArrow } from "../../../components/icons";
import RRenderer from "../../../components/richtextRenderer";

import bgFriendlyPattern from "../../../images/home-service-friendly-bg.svg";
import bgLgFriendlyPattern from "../../../images/home-service-friendly-bg-lg.svg";
import Pattern from "../../../images/Pattern-vertical.svg";

import "./index.scss";

function Service({ footer2, addBlob, orangeDots, blueDots, ...props }) {
  const imgRef = useRef(null);
  const imgSize = useWindowSize(imgRef);
  const isDesktop = useApplyAfterWidth(1023);
  return (
    <div className="relative">
      <div
        className="home-service-main-container w-full mx-auto px-[30px] md:px-[81px] lg:px-[142px] 2xl:px-[140px] pb-[25px] md:py-[47px] lg:py-[46px] 2xl:pt-[100px] 2xl:pb-0"
        id={props.title.toLowerCase().split(" ").join("-")}
      >
        <div
          className={`flex flex-col-reverse relative ${
            props.isCentered ? "" : "xl:space-y-[26px] 2xl:space-y-[100px]"
          } ${
            props.isCentered
              ? ""
              : props.reverse
              ? "lg:flex-row-reverse justify-between"
              : "lg:flex-row"
          }
          ${
            props.reverse ? "lg:space-x-[0px] 2xl:space-x-[17px]" : "lg:space-x-[17px]"
          }`}
        >
          <div
            className={`z-20 w-full relative flex-1 md:mt-[50px] lg:mt-0 ${
              props.reverse ? "lg:ml-[17px]" : "lg:mr-[17px]"
            }
            ${
              props.isCentered ? "mt-[50px]" : "mt-[30px]"
            }`}
          >
            {blueDots && (
              <div className="relative mx-auto mt-[-50px] md:mt-[15px] lg:mt-[5px] 2xl:mt-[140px]">
                <div className="md:min-w-[820px] md:min-h-[393px] md:ml-[-70px] lg:ml-[0px] md:mr-[-70px] lg:mr-[0px] 2xl:px-[122px]">
                  <img
                    src={bgFriendlyPattern}
                    className="w-screen max-w-none md:hidden ml-[-30px]"
                    alt=""
                  />
                  <img
                    src={bgLgFriendlyPattern}
                    className="w-full h-auto hidden md:block md:pb-[42px] xl:pb-[25px] 2xl:pb-[0px]"
                    alt=""
                  />
                </div>
                {props.isCentered && (
                  <div className="relative mx-auto md:max-w-[651px] lg:max-w-[606px] xl:max-w-[706px] 2xl:max-w-[850px] 3xl:max-w-[1088px]">
                    <img
                      className="z-10 absolute bottom-0 w-full h-auto"
                      src={props.image?.file?.url}
                      ref={imgRef}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            )}
            <div className="relative mx-auto lg:mx-0 max-w-[330px] md:max-w-[500px] lg:max-w-[438px] 2xl:max-w-[575px]">
              {!props.isCentered && (
                <img
                  className={`z-10 h-auto lg:relative ${
                    props.reverse &&
                    "lg:right-0 lg:ml-[10px] xl:ml-[110px] 2xl:ml-[80px] 3xl:ml-[240px] home-service-image-shadow"
                  }`}
                  src={props.image?.file?.url}
                  ref={imgRef}
                  alt=""
                  loading="lazy"
                />
              )}
            </div>

            <div
              className={`${!blueDots && "mt-[30px] md:mt-[50px]"} ${
                !props.isCentered ? "lg:hidden" : ""
              }`}
            >
              <div
                className={`home-section-footer px-[20px] md:px-[50px] h-[127px] mb-[30px] md:mb-0 ${
                  footer2 ? "footer-2" : ""
                } flex items-center`}
              >
                <div className="flex-1">
                  <h6 className="uppercase md:text-[14px]">
                    {props.footer.subTitle}
                  </h6>
                  <h3 className="uppercase mt-[-5px] md:mt-[-2px]">
                    {props.footer.title}
                  </h3>
                </div>
                <div>
                  <Link to={props.footer.link}>
                    <RightArrow
                      size={isDesktop ? 60 : 37}
                      color={footer2 ? "#00B8C3" : "#F4562D"}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 z-10">
            <h2
              className={`text-center pb-[24px] md:pb-[48px] lg:pb-[51px] 2xl:text-[34px] 2xl:leading-[36px] ${
                props.isCentered ? " lg:pb-6 2xl:pb-[31px]" : "lg:text-left"
              }`}
            >
              {props?.title}
            </h2>
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
                props.isCentered ? "lg:text-center" : "text-left"
              }`}
            >
              <RRenderer
                data={props.description}
                config={{
                  p: `markdown_paragraph lg:max-w-[711px] 2xl:max-w-[812px] ${
                    props.isCentered ? "lg:mx-auto" : ""
                  }`,
                }}
              />

              {!props.isCentered && (
                <div
                  className={`home-section-footer px-[20px] lg:px-[50px] h-[127px] w-full ${
                    footer2 ? "footer-2" : ""
                  }  items-center mt-16 lg:mt-[52px] hidden lg:flex`}
                >
                  <div className="flex-1">
                    <h6 className="uppercase text-[14px]">
                      {props.footer.subTitle}
                    </h6>
                    <h3 className="uppercase mt-[-2px]">
                      {props.footer.title}
                    </h3>
                  </div>
                  <div className="h-15 w-15 mr-[-5px]">
                    <Link to={props.footer.link}>
                      <RightArrow
                        size={isDesktop ? 60 : 37}
                        color={footer2 ? "#00B8C3" : "#F4562D"}
                      />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {orangeDots === 0 ? (
        <div>
          <img
            src={Pattern}
            className="orange-pattern absolute hidden 3xl:block left-[453px]"
            alt=""
          />
          <img
            src={Pattern}
            className="absolute hidden md:block orange-pattern"
            alt=""
          />
        </div>
      ) : orangeDots === 1 ? (
        <div>
          <img
            src={Pattern}
            className="absolute hidden md:block right-0 orange-pattern"
            alt=""
          />
          <img
            src={Pattern}
            className="absolute hidden 3xl:block right-[453px] orange-pattern"
            alt=""
          />
        </div>
      ) : (
        orangeDots === 2 && (
          <div className="hidden lg:block">
            <img src={Pattern} className="absolute orange-pattern" alt="" />
            <img
              src={Pattern}
              className="absolute orange-pattern right-0"
              alt=""
            />
          </div>
        )
      )}
    </div>
  );
}

export default Service;
