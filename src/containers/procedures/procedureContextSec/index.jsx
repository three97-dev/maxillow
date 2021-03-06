import React from "react";
import RRenderer from "../../../components/richtextRenderer";

function Service({ title, description, noBottomBorder, first }) {
  return (
    <div id={first && "main-content"}>
      <div className="mx-auto md:py-4 w-full lg:w-full">
        <div className="text-2xl flex-2 abosulte pt-8 sm:pt-12 md:pt-16 md:pb-20">
          <h1 className="text-center mt-3 mb-6 text-gray-700">{title}</h1>
          <RRenderer
            data={description}
            config={{
              p: "mb-6",
              h4: "mb-3 font-bold text-[22px] leading-[26px]",
            }}
          />
        </div>
        <div
          className={`text-center border-t border-secondary w-48 lg:w-60 mx-auto mt-8 sm:mt-12 md:mt-0  ${
            noBottomBorder ? "hidden" : "block"
          }`}
        />
      </div>
    </div>
  );
}

export default Service;
