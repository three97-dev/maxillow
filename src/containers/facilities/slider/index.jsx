import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "./index.scss";
import { RightArrow } from "../../../components/icons";

import Img1 from "../../../images/gallery/img1.png";
import Img2 from "../../../images/gallery/img2.png";
import Img3 from "../../../images/gallery/img3.png";
import Img4 from "../../../images/gallery/img4.png";

let imgs = [];
let goToslideHandler = null;

const Pagination = (props) => {
  return <button className="button-pagination" {...props}></button>;
};

const ArrowRight = ({ onClick, currentSlide, ...props }) => {
  return (
    <div>
      <div className="hidden md:grid grid-cols-2 gap-4 px-[30px] mb-[50px] lg:grid-cols-5 md:px-20 lg:px-[10.5%] 3xl:max-w-[1536px] mx-auto 3xl:px-0">
        {imgs.map(({ file: { url } }, i) => (
          <div
            className={`"rounded-[10px] max-h-[328px] transition-all rounded-[10px]  overflow-hidden cursor-pointer ${
              currentSlide === i ? "p-0 shadow-3xl m-0" : "p-4 m-0"
            }"`}
            onClick={() => goToslideHandler(i)}
            key={i}
          >
            <img
              src={url}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
      <button className="slider-right-arrow" onClick={onClick}>
        <div>
          <RightArrow size={50} color="#2FC0CC" />
        </div>
      </button>
    </div>
  );
};

const ArrowLeft = ({ onClick }) => {
  return (
    <button onClick={onClick} className="slider-left-arrow">
      <div>
        <RightArrow size={50} color="#2FC0CC" />
      </div>
    </button>
  );
};

const SliderWrapper = ({ lightBoxImages }) => {
  imgs = lightBoxImages;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slider-dots",
  };

  const slider = useRef(null);
  useEffect(() => {
    if (slider.current) {
      goToslideHandler = slider.current.slickGoTo;
    }
  }, [slider]);

  return (
    <div className="relative pb-[127px] 3xl:px-0">
      <div className="hidden md:block px-[30px] md:px-[81px] lg:px-[142px] 2xl:px-[140px] pt-[100px]">
        <h1 className="text-center">A State-of-the-Art Institution</h1>
        <p className="mt-[50px]">
          We are pleased to welcome you to Winnipeg’s newest oral and
          maxillofacial surgical facilities. Our northeast Winnipeg location is
          approximately 8 minutes from downtown with easy access from Henderson
          Highway or Main Street (via the Redwood Bridge). This facility is
          located in the brand new Henderson Professional Centre located at 755
          Henderson Highway Suite 303. Our west Winnipeg location is at 2305
          Portage Avenue (intersection of Portage Ave. and Mount Royal Rd.).
          Both of our facilities are wheelchair accessible and have free
          parking.
        </p>
      </div>

      <Slider
        {...settings}
        customPaging={Pagination}
        nextArrow={<ArrowRight />}
        prevArrow={<ArrowLeft />}
        ref={slider}
      >
        {lightBoxImages.map(({ file: { url } }, i) => (
          <div
            key={i}
            className="pt-[50px] pb-[50px] w-full h-[330px] sm:h-[500px] md:h-[672px] 2xl:h-[860px] 3xl:h-[1060px] px-[30px] md:px-[81px] lg:px-[142px] 2xl:px-[140px] 3xl:pb-20"
          >
            <div className="w-full h-full slide-shadow bg-white p-[25px] rounded-[10px]">
              <div className="w-full h-full rounded-[10px]">
                <img
                  src={url}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderWrapper;
