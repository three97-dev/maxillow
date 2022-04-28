import React from "react";
import Slider from "react-slick";

import RRenderer from "../../../components/richtextRenderer";
import { useApplyAfterWidth } from "../../../hooks/getWidth";

import arrow from "../../../images/slider-arrow/arrow-button.svg";

import "./slider.scss";

const Slide = ({ author, content }) => {
  return (
    <div className="home-slider-container mb-[25px] lg:mb-[31px] px-[14px] md:px-20 lg:px-0 lg:max-w-[650px] xl:max-w-[890px] 2xl:max-w-[1120px] lg:mx-auto">
      <div className="flex flex-col justify-between h-full home-slide-shadow rounded-[10px] bg-[#F7E2D9] border border-[#5EBDCA] py-[32px] px-[16px] lg:px-[32px]">
        <div>
          <RRenderer
            data={content}
            config={{
              p: "markdown_paragraph testimonials-font",
            }}
          />
        </div>
        <span className="text-center text-[18px] leading-[26px] font-bold text-[#696969] mt-[11px] lg:mt-[14px]">{author}</span>
      </div>
    </div>
  );
};

const ArrowRight = ({ onClick }) => {
  const isDesktop = useApplyAfterWidth(1023);

  return (
    <button
      className="home-slider-right-arrow hidden lg:block mr-[30px] md:mr-20 lg:m-0"
      onClick={onClick}
    >
      <div className="slider-arrows-shadow">
        <img src={arrow} width={isDesktop ? 60 : 37} className="rotate-180" />
      </div>
    </button>
  );
};

const ArrowLeft = ({ onClick }) => {
  const isDesktop = useApplyAfterWidth(1023);

  return (
    <button
      onClick={onClick}
      className="home-slider-left-arrow hidden lg:block ml-[30px] md:ml-20 lg:m-0"
    >
      <div className="slider-arrows-shadow">
        <img src={arrow} width={isDesktop ? 60 : 37} className="" />
      </div>
    </button>
  );
};

const Pagination = ({ props }) => {
  return <button className="button-pagination" {...props}></button>;
};

const SliderWrapper = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "home-slider-dots",
  };

  return (
    <Slider
      {...settings}
      nextArrow={<ArrowRight />}
      prevArrow={<ArrowLeft />}
      customPaging={Pagination}
      className="w-full"
    >
      {slides.map((v, i) => {
        return (
          <Slide key={i} author={v.node.author} content={v.node.content} />
        );
      })}
    </Slider>
  );
};

export default SliderWrapper;
