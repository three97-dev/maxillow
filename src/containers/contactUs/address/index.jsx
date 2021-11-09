import React from "react";

// Components
import Map from "./map";

// Assets and Styles
import "./index.scss";
import Pattern from "../../../images/pattern.svg";

function Address(props) {
  return (
    <div className="relative overflow-hidden px-[30px] md:px-[81px] lg:px-[142px] 2xl:px-[140px]">
      <img src={Pattern} className="contact-pattern-corner" alt="" />
      <div className="text-center 2xl:max-w-[1364px] 2xl:mx-auto mt-[63px] md:mt-[75px] lg:mt-[100px]">
        <h1>{props.title}</h1>
        <p className="text-[16px] leading-[22px] mt-[30px] lg:mt-[20px]">
          <span className="font-bold">Phone</span>: {props.phone}&nbsp;|&nbsp;
          <span className="font-bold">Fax</span>: {props.fax}
        </p>
        <p className="mt-[30px]">{props.text}</p>
      </div>
      <hr className="max-w-[1088px] w-full h-[1px] bg-[#7AD0DD] mx-auto my-[30px]" />
      <div className="lg:flex mx-auto 2xl:max-w-[1364px] w-full mb-[65px] md:mb-[75px] lg:mb-[100px]">
        <div className="w-full text-center lg:mr-[8px]">
          <h4 className="text-[22px] leading-[28px] font-bold">{props.data.edges[0].node.office}</h4>
          <p className="text-[16px] leading-[22px] pt-[20px] pb-[30px]">
            {props.data.edges[0].node.address}
            <br />
            {props.data.edges[0].node.address2}
            <br />
            {props.data.edges[0].node.address3}
          </p>
          <div className="w-full h-[300px] 2xl:h-[409px] mb-2 lg:mb-0 lg:mr-2 ">
            <Map link={props.mapOneLink} />
          </div>
        </div>
        <div className="w-full text-center lg:ml-[8px] mt-[30px] lg:mt-[0px]">
          <h4 className="text-[22px] leading-[28px] font-bold">{props.data.edges[1].node.office}</h4>
          <p className="text-[16px] leading-[22px] pt-[20px] pb-[30px]">
            {props.data.edges[1].node.address}
            <br />
            {props.data.edges[1].node.address2}
            <br />
            {props.data.edges[1].node.address3}
          </p>
          <div className="w-full mb-2 lg:mb-0 lg:mr-2">
            <Map link={props.mapTwoLink} />
          </div>
        </div>
        <img src={Pattern} className="contact-pattern-map" alt="" />
      </div>
    </div>
  );
}

export default Address;
