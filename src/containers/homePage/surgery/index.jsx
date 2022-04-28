import React from "react";
import { Link } from "gatsby";

import RRenderer from "../../../components/richtextRenderer";
import { RightArrow } from "../../../components/icons";

import "./index.scss";

function Surgery({ image, title, description }) {
  return (
    <div className="flex items-center flex-col-reverse lg:flex-row py-[64px] px-[30px] lg:px-[140px] bg-[#F5F5F5]">
      <div className="flex items-center lg:min-w-[350px] xl:min-w-[500px] 2xl:min-w-[729px] 3xl:min-w-[900px] pb-[32px] lg:pb-[0px] lg:mr-[30px] 2xl:mr-[100px] pl-[30px] lg:pl-[61px] xl:pl-[67px] 2xl:pl-[68px] 3xl:pl-[110px] pr-[30px] lg:pr-[32px] xl:pr-[64px] 2xl:pr-[128px] ml-[-30px] lg:ml-[0px] mr-[-30px] backgroundImage bg-origin-border">
        <img className="w-full mt-[-32px] lg:mt-[0px] lg:mb-[-2px]" src={image.file.url} alt={image.title} />
      </div>
      <div className="mb-[64px] lg:mb-[0px]">
        <h2 className="mb-[32px]">{title}</h2>
        <RRenderer
          data={description}
          config={{
            p: `markdown_paragraph text-[#696969]`,
          }}
        />
        <div className="mt-[32px]">
          <Link className="flex items-center" to="/procedures">
            <div className="w-[279px] lg:w-[260px]">
              <h4 className="uppercase text-[#696969]">VIEW OUR</h4>
              <div className="page-link">Procedures</div>
            </div>
            <div className="py-[0px]">
              <RightArrow size="51" color="#F4562D" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Surgery;
