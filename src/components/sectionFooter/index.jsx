import React from "react";
import { Link } from "gatsby";

// Assets and styles
import ArrowButtonWhite from "./../../images/ArrowButtonWhite.png";

function SectionFooter({ footerBg, data = {} }) {
  const { subTitle, title, link, target } = data;

  return (
    <div className={`${footerBg} px-[30px] md:px-20 lg:px-[10.5%]`}>
      <div className="flex justify-between items-center  py-10 z-20">
        <div>
          <h2 className="uppercase text-white">{subTitle || "view our"}</h2>
          <h3 className="text-center text-white uppercase">
            {title || "PROCEDURES"}
          </h3>
        </div>
        <Link to={link} target={target}>
          <button>
            <img src={ArrowButtonWhite} alt="" className="w-12" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SectionFooter;
