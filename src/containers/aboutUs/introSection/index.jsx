import React from "react";
import { Link } from "gatsby";

// Components
import RRenderer from "../../../components/richtextRenderer";

// Assets and Styles
import arrowImage from "../../../images/ArrowRedRight.png";
import { RightArrow } from "../../../components/icons";
import { useApplyAfterWidth } from "../../../hooks/getWidth";

const AboutUsIntroSection = ({ data, ...props }) => {
  const { title, image, quote, description } = data;
  const isDesktop = useApplyAfterWidth(1023);

  return (
    <div
      className=" mx-auto px-[30px] md:px-[81px] xl:px-[140px] pt-[50px] md:pt-[75px] lg:pt-[50px]"
      id="main-content"
    >
      <div>
        <div className="flex flex-col lg:flex-row w-full lg:w-full mx-auto mb-[34px] lg:space-x-[50px] lg:mb-0">
          <div className="lg:flex relative lg:flex-col lg:justify-between lg:max-w-[300px] xl:max-w-[400px]">
            <div className="hidden lg:block absolute w-[1px] h-[55%] bg-[#7AD0DD] top-5 right-0 xl:right-3" />
            <h2 className="text-center lg:text-left mb-[50px]">{title}</h2>
            <div className="hidden md:block w-full pl-16 pr-6 pt-6 mb-[100px] lg:w-auto lg:m-0 lg:p-0">
              <img src={image.file.url} alt="teeth" />
            </div>
          </div>
          <div className="w-full">
            <RRenderer
              data={description}
              config={{
                p: "mb-4",
              }}
            />
            <div
              className={`hidden lg:flex home-section-footer px-[20px] lg:px-[50px] h-[127px] items-center mt-0 md:mt-0 lg:mt-[50px] lg:px-[50px]`}
            >
              <div className="flex-1">
                <h6 className="uppercase">{props.footer.subTitle}</h6>
                <h2>{props.footer.title}</h2>
              </div>
              <div>
                <Link to={props.footer.link}>
                  <RightArrow size={isDesktop ? 60 : 37} color={"#F4562D"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end lg:hidden">
          <div className="lg:pl-16 w-full lg:w-8/12">
            <div
              className={`home-section-footer px-5 pt-[38px] pb-11 flex items-center mt-0 md:mt-0 xl:mt-16`}
            >
              <div className="flex-1">
                <h6>{props.footer.subTitle}</h6>
                <h2>{props.footer.title}</h2>
              </div>
              <div>
                <Link to={props.footer.link}>
                  <RightArrow size={isDesktop ? 60 : 37} color={"#F4562D"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsIntroSection;
