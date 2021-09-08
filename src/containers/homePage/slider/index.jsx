import React from "react"
import Slider from "./Slider"

function SliderSection(props) {
  let slides = props.data.edges

  return (
    <div className="home-slider-main-container global-x-spacing pt-24" id="home-testimonials">
      <div>
        <h3 className="text-center pb-6 md:pb-48 lg:pb-12 xl:pb-0">
          Kind Words From Our Patients
        </h3>
        <div className="flex items-end">
          <div className="hidden lg:block w-5/12">
            <img
              src={props.src}
              className="home-slider-image mx-auto xl:-mt-16"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="w-full lg:w-7/12">
            <div className="md:mx-10 lg:mx-16 xl:mx-24 mb-12 md:mb-24 lg:mb-16 xl:mb-20 relative">
              <Slider slides={slides} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderSection
