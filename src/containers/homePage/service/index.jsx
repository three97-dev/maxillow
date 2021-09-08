import React, { useRef } from "react"
import { Link } from "gatsby"

import { getSrcSet, useWindowSize } from "../../../hooks/getWidth"
import { RightArrow } from "../../../components/icons"
import RRenderer from "../../../components/richtextRenderer"

import "./index.scss"
import bgPattern from "../../../images/home-service-bg-pattern.svg"
import Pattern from "../../../images/pattern.svg"
import PatternBlue from "../../../images/pattern-blue.svg"

function Service({ footer2, addBlob, orangeDots, blueDots, ...props }) {
  const imgRef = useRef(null)
  const imgSize = useWindowSize(imgRef)

  return (
    <div
      className={`home-service-main-container global-x-spacing ${
        props.isCentered ? "p-0 px-4" : "p-4 py-8  md:py-8 lg:py-12 xl:py-20"
      }`}
      id={props.title.toLowerCase().split(" ").join("-")}
    >
      <div
        className={`flex-col-reverse flex flex-col gap-4 relative ${
          props.isCentered
            ? "pt-12"
            : props.reverse
            ? "lg:flex-row-reverse justify-between"
            : "lg:flex-row"
        }  items-center`}
      >
        {addBlob && (
          <div className="home-section-bg">
            <img src={bgPattern} alt="" />
          </div>
        )}
        <div
          className={`z-20 w-full md:w-11/12 ${
            !props.isCentered ? (props.reverse ? "lg:pl-8" : "lg:pr-8") : ""
          }  flex-1`}
        >
          <div className="relative flex">
            {orangeDots && <img src={Pattern} className="orange-pattern" alt="" />}
            {blueDots && <img src={PatternBlue} className="blue-pattern" alt="" />}
            <img
              className={`w-full z-10 ${
                !props.isCentered
                  ? "md:w-9/12 lg:w-full"
                  : " homer-service-center-image"
              } mx-auto`}
              srcSet={getSrcSet(props.image?.file?.url, imgSize.width)}
              ref={imgRef}
              alt=""
              loading="lazy"
            />
          </div>

          <div>
            <div
              className={` home-section-footer ${
                footer2 ? "footer-2" : ""
              } flex items-center ${!props.isCentered ? "lg:hidden" : ""} mb-4`}
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
        <div
          className={`flex-1 z-10 ${!props.reverse ? "lg:pl-32" : "lg:pr-32"}`}
        >
          <h3 className="text-center mb-1">{props?.title}</h3>
          <p
            className={`text-sm md:text-xl py-1 ${
              props.isCentered ? "text-center" : ""
            }`}
          >
            {props.subTitle}
          </p>
          <div
            className={` w-full md:w-10/12 lg:w-full mx-auto text-sm md:text-sm ${
              props.isCentered ? "text-center" : ""
            }`}
          >
            <div
              className={`max-w-2xl ${
                props.isCentered ? "md:mb-20 lg:mb-0" : ""
              }`}
            >
              <RRenderer
                data={props.description}
                config={{
                  p: "mt-4",
                }}
              />
            </div>

            {!props.isCentered && (
              <div
                className={`home-section-footer ${
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
  )
}

export default Service
