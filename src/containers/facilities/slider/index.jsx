import React, { useState } from "react";
import Slider from "react-slick";
import "./index.scss";
import { RightArrow } from "../../../components/icons";
import { useApplyAfterWidth } from "../../../hooks/getWidth";
import RRenderer from "../../../components/richtextRenderer";

const ArrowButton = ({ onClick, arrowClass }) => {
  const isDesktop = useApplyAfterWidth(1023);
  return (
    <button onClick={onClick} className={`${arrowClass} z-10`}>
      <RightArrow size={isDesktop ? 60 : 37} color="#5EBDCA" />
    </button>
  );
};

const SliderWrapper = ({ lightBoxImages, title, content }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let goToSlider;

  return (
    <div className="relative pb-[80px] lg:pb-0 3xl:max-w-full 3xl:mx-auto 3xl:px-0">
      <div className="pt-[100px] px-[30px] md:px-[81px] lg:px-[142px] 2xl:px-[140px]">
        <h1 className="text-center">{title}</h1>
        <div className="flex justify-center">
          <RRenderer
            data={content}
            config={{
              p: "mt-[50px]",
            }}
          />
        </div>
      </div>

      <Slider
        prevArrow={<ArrowButton arrowClass="slider-left-arrow" />}
        nextArrow={<ArrowButton arrowClass="slider-right-arrow" />}
        ref={(slider) => (goToSlider = slider)}
        infinite={false}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        beforeChange={(current, newSlide) => setCurrentSlide(newSlide)}
        className="2xl:px-[140px] mx-auto"
      >
        {lightBoxImages.map(({ file: { url } }, i) => (
          <div key={i} className="pt-[50px] pb-[25px]">
            <div className="max-w-[700px] md:w-[500px] 2xl:w-[905px] xl:max-w-[905px] max-h-[475px] md:h-[300px] 2xl:h-[575px] xl:max-h-[575px] slide-shadow bg-[#FFF8F8] p-[12px] lg:p-[25px] rounded-[10px] sm:mx-auto mx-[30px]">
              <img
                src={url}
                className="w-full h-full object-cover object-center rounded-[10px]"
                style={{ border: "1px solid #707070" }}
              />
            </div>
          </div>
        ))}
      </Slider>

      <div className="hidden lg:flex justify-center mb-[50px] h-[170px]">
        {lightBoxImages.map(({ file: { url } }, i) => (
          <div
            className={`rounded-[10px] my-auto h-[100px] w-[150px] transition-all mx-[25px] overflow-hidden cursor-pointer ${
              currentSlide === i ? "h-[120px] w-[170px] shadow-3xl m-0" : "m-0"
            }`}
            onClick={() => goToSlider.slickGoTo(i)}
            key={i}
          >
            <img src={url} className="w-full h-full object-cover object-center" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderWrapper;
