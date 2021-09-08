import React from "react"
import RRenderer from "../../../components/richtextRenderer"

// Assets and styles
import pattern from "../../../images/pattern.svg"
import "./index.scss"

const Doctor = ({ title, description, src, quote, inverse }) => {
  return (
    <div className="flex flex-col relative pt-24 md:pt-28 mb-20 md:mb-24 lg:pt-24 lg:pb-16 global-x-spacing doctor">
      <div className={` pattern-2-container ${inverse ? "inverse" : ""} `}>
        <img src={pattern} className={`pattern-2`} alt="" />
      </div>
      <div
        className={`flex flex-col-reverse items-end lg:z-20 ${
          inverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div
          className={`w-full relative lg:w-5/12 xl:w-4/12 doctor-image ${
            inverse ? "doctor-image-inverse" : ""
          } flex`}
        >
          <img
            src={pattern}
            className={`pattern-1 ${inverse ? "inverse" : ""} z-10`}
            alt=""
          />
          <img
            src={src}
            className="mx-auto w-full md:w-1/2 lg:w-full lg:z-30 rounded-xl"
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/12" />
        <div className="lg:relative lg:w-6/12 xl:w-7/12 text-center">
          <div className="mx-auto w-full md:w-1/2 lg:w-full">
            <h3 className="mb-4">{title}</h3>
            <p className="text-left">
              <RRenderer
                data={description}
                config={{
                  p: "mt-4",
                }}
              />
            </p>
          </div>
          <div
            className={`hobby-bar px-4 lg:px-0 text-left flex items-center ${
              inverse ? "hobby-bar-inverse" : ""
            } z-10`}
          >
            <div className="w-full md:w-1/2 lg:w-full mx-auto">
              <h2>{quote}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctor
