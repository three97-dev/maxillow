import React from "react";
import { Link } from "gatsby";

import RRenderer from "../../../components/richtextRenderer";
import { RightArrow } from "../../../components/icons";

import "./index.scss";

function OurStaff({ image, title, description}) {
  return (
    <div className="staff-section-background pt-[57px] px-[30px] lg:px-[140px] xl:px-[230px]">
      <h2 className="text-center mb-[32px]">{title}</h2>
      <RRenderer
        data={description}
        config={{
          p: `max-w-[1088px] text-[#696969] lg:text-center mx-auto`,
        }}
      />
      <div className="mt-[32px]">
        <Link className="footerGrid" to="/about-us">
          <div className="w-[279px] lg:w-[260px]">
            <h4 className="uppercase text-[#696969]">CLICK IMAGE TO</h4>
            <div className="titles page-link">Meet The Team</div>
          </div>
          <div className="arrow">
            <RightArrow size="51" color="#F4562D" />
          </div>
          <div className="picture ml-[-30px] lg:ml-[0px] 3xl:ml-[68px] mr-[-30px] lg:mr-[130px] 3xl:mr-[267px]">
            <img className="w-full image-shadow" src={image.file.url} alt={image.title} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default OurStaff;
