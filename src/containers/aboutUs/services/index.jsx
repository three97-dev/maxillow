import React, { useRef } from "react";
import RRenderer from "../../../components/richtextRenderer";
import { getSrcSet, useWindowSize } from "../../../hooks/getWidth";

function Service(props) {
  const imgRef = useRef(null);
  const imgSize = useWindowSize(imgRef);

  return (
    <div className="container mx-auto max-w-7xl p-4 py-24">
      <div
        className={`flex gap-6 ${
          props.reverse
            ? "md:flex-row-reverse justify-between"
            : "md:flex-row"
        } flex-col items-center`}
      >
        <div className="text-3xl flex-1 align-end">
          <h2 className="text-center text-3xl py-3 font-bold">
            {props.imageTitle}
          </h2>
          <img
            srcSet={getSrcSet(props.src, imgSize.width)}
            className={props.reverse ? "float-right" : ""}
            ref={imgRef}
            alt=""
          />
        </div>
        <div className="text-2xl flex-1 abosulte">
          <h2 className="text-center text-3xl py-3 font-bold">
            {props.title}
          </h2>

          <p className="text-sm md:text-sm py-1">
            <RRenderer
              data={props.description}
              config={{
                p: "mt-4 text-text",
              }}
            />
          </p>

          {props.quote && (
            <div
              className={`flex-1 flex  flex-row items-center gap-6 ${
                props.quote === "" ? "hidden" : ""
              }`}
            >
              <p className="text-center text-5xl md:text-9xl py-3 text-secondary">
                “
              </p>
              <p className="text-center text-xs md:text-base py-3 text-secondary font-bold">
                {props.quote}
              </p>
              <p className="text-center text-5xl md:text-9xl py-3 text-secondary">
                „
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Service;
