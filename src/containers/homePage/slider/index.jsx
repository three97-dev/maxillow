import React from "react";
import Slider from "./Slider";

function SliderSection(props) {
  let slides = props.data.edges;

  return (
    <div className="2xl:px-0 home-slider-main-container pt-[64px]" id="home-testimonials">
      <div className="relative 2xl:max-w-[1236px] mx-auto">
        <h2 className="text-center pb-[32px] lg:pb-[50px] px-[30px] md:px-20 lg:px-[30px]">Words From Our Patients</h2>
        <div>
          <div className="relative">
            <Slider slides={slides} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderSection;
