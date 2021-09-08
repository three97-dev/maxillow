import React from "react"
import { Link } from "gatsby"

// Components
import RRenderer from "../../../components/richtextRenderer"

// Assets and Styles
import "./index.scss"
import QuoteIcon from "../../../images/quote-icon.svg"
import arrowImage from "../../../images/ArrowRedRight.png"

const AboutUsIntroSection = ({ data, ...props }) => {
  const { title, image, quote, description } = data

  return (
    <div className="py-6 md:py-12 lg:pt-16 lg:pb-24 global-x-spacing" id="main-content">
      <div className="px-6 xl:px-0 ">
        <div className="flex flex-col lg:flex-row w-full md:w-1/2 lg:w-full mx-auto">
          <div className="w-full lg:w-4/12 pr-0 lg:pr-10 xl:pr-16">
            <h3 className="text-center lg:text-left mb-4">{title}</h3>
          </div>
          <div className="pl-0 lg:pl-10 xl:pl-16 w-full lg:w-8/12 lg:border-l border-secondary">
            <RRenderer
              data={description}
              config={{
                p: "mb-4 text-text",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-end lg:items-center lg:flex-row xl:mt-12">
          <div className="hidden md:block w-1/2 lg:w-4/12">
            <img className="skeleton-teeth-image" src={image.file.url} alt="" />
          </div>
          <div className="lg:pl-16 w-full lg:w-8/12  ">
            <div className="hidden xl:flex items-start">
              <div>
                <img src={QuoteIcon} className="h-12 w-12"  alt="" />
              </div>
              <h4 className="flex-1 px-12 text-center text-secondary">
                {quote.quote}
              </h4>
              <div className="self-end">
                <img src={QuoteIcon} className="right-quote h-12 w-12" alt="" />
              </div>
            </div>
            <div
              className={`home-section-footer flex items-center mt-0 md:mt-8 lg:mt-0 xl:mt-16`}
            >
              <div className="flex-1">
                <h2>{props.footer.subTitle}</h2>
                <h3>{props.footer.title}</h3>
              </div>
              <div>
                <Link to={props.footer.link}>
                  <img src={arrowImage} className="h-12 w-12" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsIntroSection
