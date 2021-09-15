import React from "react";
import RRenderer from "../../../components/richtextRenderer";

// Assets and styles
import pattern from "../../../images/pattern.svg";
import patternBlue from "../../../images/pattern-blue.svg";

function Doctor1({ title, description, src, quote, doctor }) {
  return (
    <div className="relative mt-[75px] lg:mt-[100px]">
      <div className="2xl:max-w-[1236px] mx-auto flex flex-col relative px-[30px] md:px-20 mb-[50px] md:mb-20 lg:px-0 lg:mb-0 doctor">
        <div className="flex flex-col items-end gap-[50px] lg:z-20 lg:items-stretch lg:gap-[35px] lg:flex-row-reverse lg:pl-[10.5%] 2xl:p-0">
          <div className="w-full relative flex top-[13px] lg:flex-1">
            <img src={patternBlue} className="pattern-1 inverse z-10" alt="" />
            <img
              src={src}
              className="mx-auto w-full md:max-w-[540px] lg:z-30 lg:max-w-[400px] xl:max-w-[470px] rounded-xl"
              alt="doctor"
            />
          </div>
          <div className="lg:max-w-[450px] xl:max-w-[600px] lg:pb-[100px] xl:pb-[153px]">
            <div className="mx-auto w-full">
              <h3 className="mb-[50px] text-center lg:mb-4 xl:mb-9">{title}</h3>
              <div>
                <RRenderer
                  data={description}
                  config={{
                    p: "mt-4 md:text-xl lg:text-base xl:text-lg 2xl:text-xl",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hobby-bar px-[30px] py-5 md:py-10 md:px-20 2xl:px-0 lg:py-5 lg:absolute lg:bottom-0 text-left flex items-center z-10 lg:pl-[10.5%]">
        <div className="2xl:w-[1236px] 2xl:mx-auto">
          <h2 className="lg:max-w-[500px] xl:max-w-[600px]">{quote}</h2>
        </div>
      </div>
    </div>
  );
}

export default Doctor1;
