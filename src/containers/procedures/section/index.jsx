import React, { useRef } from "react"
import RRenderer from "../../../components/richtextRenderer"
import { getSrcSet, useWindowSize } from "../../../hooks/getWidth"

import "./index.scss"

const Service = props => {
  const imgRef = useRef(null)
  const imgSize = useWindowSize(imgRef)
  return (
    <div className="relative pt-16 lg:pt-20 lg:pt-14 global-x-spacing">
      <div className="md:w-1/2 lg:w-full mx-auto">
        <div className="flex lg:flex-row flex-col items-center lg:items-start">
          <div className="lg:relative flex-2 mb-8 md:mb-12 lg:mb-0 lg:mr-12 z-10">
            <h3 className="mb-3 text-center lg:text-left">
              {props.mainHeading}
            </h3>
            <h4 className="mb-2 lg:mb-3">{props.title}</h4>
            <div>
              <RRenderer
                data={props.description}
                config={{
                  p: "mt-2 text-text text-sm",
                }}
              />
            </div>
            <div
              className={`procedure-section-bar global-x-spacing ${
                props.inverse ? "bar-inverse" : ""
              }`}
            >
              <div className="md:w-1/2 lg:w-full mx-auto">
                <h2 className="text-text">{props.footerText}</h2>
              </div>
            </div>
          </div>

          <div className="w-full lg:flex-1 lg:z-20">
            <img
              ref={imgRef}
              srcSet={getSrcSet(props.src, imgSize.width)}
              className="w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
