import React from "react";
import { Link } from "gatsby";

import RRenderer from "../../../components/richtextRenderer";
import { RightArrow } from "../../../components/icons";
import ArmChair from "../../../images/facilities/armchair.svg";
import HandHeart from "../../../images/facilities/hand-heart.svg";
import Medicine from "../../../images/facilities/medicine.svg";
import PinCheck from "../../../images/facilities/pin-check.svg";

import "./index.scss";

function Facilities({ images, title, description, firstFacility, secondFacility, thirdFacility, fourthFacility }) {
  return (
    <div className="w-full lg:px-[124px] pt-[64px] pb-[76px] bg-[#F0FFF7]">
      <div className="facilitiesGrid w-full max-w-[1672px] mx-auto">
        <div className="titles max-w-[812px] lg:mb-[40px]">
          <div className="mb-[32px] px-[30px] lg:px-[0px] lg:pl-[16px]">
            <h2 className="mb-[32px]">{title}</h2>
            <RRenderer
              data={description}
              config={{
                p: `markdown_paragraph text-[#696969]`,
              }}
            />
          </div>
          <div className="px-[30px] lg:px-[0px] lg:pl-[16px] mb-[32px] lg:mb-[0px]">
            <Link className="flex items-center" to="/facilities">
              <div className="w-[279px] lg:w-[260px]">
                <h4 className="uppercase text-[#696969]">VIEW OUR</h4>
                <div className="page-link">Facilities</div>
              </div>
              <div>
                <RightArrow size="51" color="#F4562D" />
              </div>
            </Link>
          </div>
        </div>
        <div className="pictures images-background mb-8 lg:mb-0 overflow-hidden py-4 pl-4 lg:p-4 rounded-l-[10px] lg:rounded-[10px]">
          <div className="scroll-bar overflow-x-auto">
            <ul className="flex">
              {images.map((image, index) => (
                <li className="image-item rounded-[10px] min-w-[280px] lg:min-w-[398px] overflow-hidden" key={index}>
                  <img className="" src={image.file.url} alt={image.title} />
                </li>
              ))}
             <li className="min-w-[1px] lg:hidden"></li>
            </ul>
          </div>
        </div>
        <ul className="facilities px-[30px] lg:px-[0px] lg:pl-[60px] lg:mb-[40px]">
          <li className="flex items-center mb-[48px]">
            <img className="mr-[17px]" src={ArmChair} alt="Arm chair" />
            <p className="text-[#696969] font-bold">{firstFacility}</p>
          </li>
          <li className="flex items-center mb-[48px]">
            <img className="mr-[17px]" src={HandHeart} alt="Hand heart" />
            <p className="text-[#696969] font-bold">{secondFacility}</p>
          </li>
          <li className="flex items-center mb-[48px]">
            <img className="mr-[17px]" src={Medicine} alt="Medicine" />
            <p className="text-[#696969] font-bold">{thirdFacility}</p>
          </li>
          <li className="flex items-center">
            <img className="mr-[17px]" src={PinCheck} alt="Pin check" />
            <p className="text-[#696969] font-bold">{fourthFacility}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Facilities;
