import * as React from "react";
import { Link } from "gatsby";

import { RightArrow } from "../../components/icons";

import { useApplyAfterWidth } from "../../hooks/getWidth";

const ColoredButton = (props) => {
  const isDesktop = useApplyAfterWidth(1023);

  return (
    <div className="flex items-center justify-between home-section-footer px-[20px] py-[40px] lg:py-[30px] md:px-[50px] min-h-[127px] mt-[24px] lg:mt-[50px]">
      <div className="mr-[20px]">
        <h4 className="uppercase">{props.subTitle}</h4>
        <p className="text-[24px] md:text-[28px] leading-[34px] font-bold mt-[-5px] md:mt-[-2px]">{props.title}</p>
      </div>
      <div>
        <Link to={props.link}>
          <RightArrow size={isDesktop ? 65 : 37} color="#F4562D" />
        </Link>
      </div>
    </div>
  );
};

export default ColoredButton;
