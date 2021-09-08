import React from "react"
import RRenderer from "../../../components/richtextRenderer"

//
import "./index.scss"

const Section = ({ title, subTitle, image, description, reverse }) => {
  return (
    <div className="pt-8 md:pt-12 lg:pt-36 global-x-spacing">
      <div>
        <div
          className={`flex flex-col-reverse lg:flex-row${
            reverse ? "-reverse" : ""
          } items-center`}
        >
          <div className="w-full lg:w-1/2">
            <img src={image.file.url} className="w-full" alt="" />
          </div>
          <div
            className={`w-full mb-4 lg:mb-0 lg:w-1/2 ${
              reverse ? "lg:pr-20" : "lg:pl-20"
            }`}
          >
            <div className=" w-full md:w-9/12 lg:w-full mx-auto mb-8 md:mb-10 lg:mb-0">
              <h1 className="text-center mb-4">{title}</h1>
              <h4 className="mb-4">{subTitle}</h4>
              <div>
                <RRenderer
                  data={description}
                  config={{
                    p: "mt-2 text-text text-sm",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
