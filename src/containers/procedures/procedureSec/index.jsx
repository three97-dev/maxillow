import React from "react";
import { Link } from "gatsby";
//Assts and Styles
import Arrow from "./../../../images/ArrowButtonWhite.png";
import "./index.scss";

function ProcedureSec(props) {
  return (
    <div className="procedure-intro-container pt-[50px] md:pt-[85px] lg:pt-[120px] xl:pt-[150px] 3xl:pt-[220px] relative">
      <div className="procedures-container flex flex-col rounded-xl relative z-50 lg:py-12 lg:px-16 3xl:py-[75px] 3xl:px-[138px]">
        <div className="z-20">
          <h3 className="text-center mb-6 text-[28px] md:mb-9">Procedures</h3>
          <div className="grid gap-y-[15px] grid-cols-1 md:grid-cols-2 md:gap-x-[16px]">
            {props.data.edges.map((v, i) => {
              return (
                <Link to={`/${v.node.slug}`}>
                  <div
                    className="w-full bg-secondary bg-opacity-90 p-5 rounded-xl flex flex-row items-center procedures-link-shadow"
                    key={i}
                  >
                    <h6 className="flex-1 text-white uppercase md:text-sm">
                      {v.node.title}
                    </h6>
                    <img src={Arrow} alt="" className="w-10" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcedureSec;
