import React from "react";
import Slider from "./Slider";

function SliderSection(props) {
  let slides = props.data.edges;

  return (
    <div
      className="home-slider-main-container px-[30px] pt-[50px] md:px-20 lg:px-[30px]"
      id="home-testimonials"
    >
      <div>
        <h3 className="text-center pb-[50px] lg:hidden">
          Kind Words From Our Patients
        </h3>
        <div className="flex lg:justify-start xl:gap-7 items-end">
          <div className="hidden lg:block relative left-[-85px]">
            <img
              src={props.src}
              className="home-slider-image lg:max-w-[420px] xl:max-w-[572px]"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="w-full lg:w-auto lg:flex-1">
            <h3 className="hidden lg:block pb-[50px]">
              Kind Words From Our Patients
            </h3>
            <div className="lg:max-w-[450px] xl:max-w-[530px] mb-[55px] lg:mb-0 lg:pb-[50px] relative">
              <Slider slides={slides} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderSection;
