import React from "react";
import { Link } from "gatsby";

import { RightArrow } from "../icons";
import { useApplyAfterWidth } from "../../hooks/getWidth";

function SectionFooter({ footerBg, data = {} }) {
  const { subTitle, title, link, target } = data;
  const isDesktop = useApplyAfterWidth(1023);

  return (
    <div
      className={`flex ${footerBg} relative h-[111px] sm:h-[151px] 2xl:h-[200px] px-[30px] sm:px-[81px] lg:px-[139px]`}
    >
      <div className="mx-auto my-auto z-20 w-full">
        <div className="flex justify-between">
          <div>
            <p className="uppercase text-white lg:text-sm">
              {subTitle || "view our"}
            </p>
            <h3 className="text-center text-white uppercase">
              {title || "PROCEDURES"}
            </h3>
          </div>
          <Link to={link} target={target} className="my-auto">
            <RightArrow size={isDesktop ? 60 : 37} color="#FFFFFF" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SectionFooter;
