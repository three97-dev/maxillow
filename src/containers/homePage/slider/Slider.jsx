import React from "react"
import Slider from "react-slick"

import { RightArrow } from "../../../components/icons"
import RRenderer from "../../../components/richtextRenderer"
import "./slider.scss"

const Slide = ({ author, content }) => {
  return (
    <div className="mb-10 lg:mb-6 home-slider-slide">
      <div className="flex flex-col h-full justify-center">
        <RRenderer
          data={content}
          config={{
            p: "text-sm mb-4",
          }}
        />
        <div className="mt-2">
          <h4 className="uppercase font-bold">{author}</h4>
        </div>
      </div>
    </div>
  )
}

const ArrowRight = ({ onClick }) => {
  return (
    <div className="home-slider-right-arrow">
      <button onClick={onClick}>
        <div className="block lg:hidden">
          <RightArrow size={36} color="#2FC0CC" />
        </div>
        <div className="hidden lg:block">
          <RightArrow size={50} color="#2FC0CC" />
        </div>
      </button>
    </div>
  )
}

const ArrowLeft = ({ onClick }) => {
  return (
    <div className="home-slider-left-arrow">
      <button onClick={onClick}>
        <div className="block lg:hidden">
          <RightArrow size={36} color="#2FC0CC" />
        </div>
        <div className="hidden lg:block">
          <RightArrow size={50} color="#2FC0CC" />
        </div>
      </button>
    </div>
  )
}

const Pagination = ({ props }) => {
  return <button className="button-pagination" {...props}></button>
}

const SliderWrapper = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "home-slider-dots",
  }

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
          )
        })}
      </Slider>
    </>
  )
}

export default SliderWrapper
