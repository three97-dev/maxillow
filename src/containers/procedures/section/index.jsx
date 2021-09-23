import React, { useRef } from "react";
import RRenderer from "../../../components/richtextRenderer";
import { getSrcSet, useWindowSize } from "../../../hooks/getWidth";

import "./index.scss";

const Service = (props) => {
  const imgRef = useRef(null);
  const imgSize = useWindowSize(imgRef);

  return (
    <div className="flex-1">
      <div className="lg:mx-0 lg:h-[500px] lg:overflow-y-auto xl:h-[380px] 2xl:h-[360px] 3xl:h-[290px]">
        <h3 className="mb-[50px]">{props.title}</h3>
        <RRenderer
          data={props.description}
          config={{
            p: "mt-2",
          }}
        />
      </div>
      <div
        className={`mt-[50px] p-[25px] procedure-section-bar md:px-20 lg:p-4 lg:h-[150px] xl:h-[120px] 3xl:h-[111px] ${
          props.inverse ? "bar-inverse" : ""
        }`}
      >
        <p className="text-sm lg:text-sm lg:max-w-[500px] xl:max-w-[600px]">
          {props.footerText}
        </p>
      </div>
      <div className="mt-[50px]">
        <img
          srcSet={getSrcSet(props.src, imgSize.width)}
          className="w-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default Service;
