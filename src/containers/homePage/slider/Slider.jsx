import React from "react";
import Slider from "react-slick";

import { RightArrow } from "../../../components/icons";
import RRenderer from "../../../components/richtextRenderer";
import "./slider.scss";

const Slide = ({ author, content }) => {
  return (
    <div className="home-slider-container mb-[50px] px-[30px] md:px-20 lg:px-0 lg:max-w-[650px] xl:max-w-[800px] 2xl:max-w-[80%] lg:mx-auto">
      <div className="flex flex-col h-full home-slide-shadow rounded-[10px] bg-white p-[25px] pb-[30px] md:p-[50px] 2xl:px-[90px] 2xl:py-[50px]">
        <div className="overflow-y-auto flex-1">
          <RRenderer
            data={content}
            config={{
              p: "leading-[22px] md:text-base lg:text-xl",
            }}
          />
        </div>
        <h4 className="uppercase font-bold mt-7 xl:mt-10">{author}</h4>
      </div>
    </div>
  );
};

const ArrowRight = ({ onClick }) => {
  return (
    <button
      className="home-slider-right-arrow mr-[30px] md:mr-20 lg:m-0"
      onClick={onClick}
    >
      <div>
        <RightArrow size={50} color="#2FC0CC" />
      </div>
    </button>
  );
};

const ArrowLeft = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="home-slider-left-arrow ml-[30px] md:ml-20 lg:m-0"
    >
      <div>
        <RightArrow size={50} color="#2FC0CC" />
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
    <>
      <Slider
        {...settings}
        nextArrow={<ArrowRight />}
        prevArrow={<ArrowLeft />}
        customPaging={Pagination}
      >
        {slides.map((v, i) => {
          return (
            <Slide key={i} author={v.node.author} content={v.node.content} />
          );
        })}
      </Slider>
    </>
  );
};

export default SliderWrapper;
