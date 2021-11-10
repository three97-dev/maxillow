import React, { useRef } from "react";
import { getSrcSet, useWindowSize } from "../../../hooks/getWidth";

function Service(props) {
  const data = props.data.edges[0].node;
  const imgRef = useRef(null);
  const imgSize = useWindowSize(imgRef);

  return (
    <div className="mx-auto px-[30px] md:px-[81px] lg:px-[142px] 2xl:px-[140px] mt-[75px] md:mt-[100px] lg:mt-[50px]">
      <div className="flex flex-col max-w-3xl m-auto items-center">
        <div className="w-sm flex-1">
          <h2 className="text-center">{data.title}</h2>
          <p className="mt-9 text-center max-w-[400px]">
            {data.description}
          </p>
        </div>
      </div>
      <div className="border-t border-secondary max-w-lg mx-auto w-40 lg:w-60 my-[50px]" />
      <div className="flex flex-col lg:flex-row space-y-[50px] lg:space-x-[50px] lg:space-y-0 justify-center items-center flex-nowrap lg:justify-between mb-[50px] md:mb-[75px]">
        {data.images.map((v, i) => {
          return (
            <img
              key={`image-key-${i}`}
              ref={imgRef}
              className="w-44 lg:w-72 lg:mb-0"
              srcSet={getSrcSet(v.file.url, imgSize.width)}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
}

export default Service;
