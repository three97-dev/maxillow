import React from "react";
import { Link } from "gatsby";

// Assets and styles
import ArrowButtonWhite from "./../../images/ArrowButtonWhite.png";

function SectionFooter({ footerBg, data = {} }) {
  const { subTitle, title, link, target } = data;

  return (
    <div className={`2xl:px-0 ${footerBg} px-[30px] md:px-20 lg:px-[10.5%]`}>
      <div className="2xl:max-w-[1236px] mx-auto flex justify-between items-center  py-10 z-20">
        <div>
          <p className="uppercase text-white lg:text-sm">
            {subTitle || "view our"}
          </p>
          <h2 className="text-center text-white uppercase">
            {title || "PROCEDURES"}
          </h2>
        </div>
        <Link to={link} target={target}>
          <button>
            <img src={ArrowButtonWhite} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SectionFooter;
