import React from "react";
import RRenderer from "../../../components/richtextRenderer";

// Assets and styles
import pattern from "../../../images/pattern.svg";
import patternBlue from "../../../images/pattern-blue.svg";

function Doctor2({ title, description, src, quote, doctor }) {
  return (
    <div className="relative mt-[75px] lg:mt-[100px]">
      <div className="mx-auto flex flex-col relative px-[30px] md:px-[81px] xl:px-[140px] mb-[50px] md:mb-20 lg:mb-0 doctor">
        <div className="flex flex-col items-end space-y-[50px] lg:z-20 lg:items-stretch lg:space-y-0 lg:flex-row ">
          <div className="lg:self-end w-full lg:max-w-[400px] relative flex top-[13px]">
            <img src={pattern} className="pattern-1 z-10" alt="" />
            <img
              src={src}
              className="mx-auto w-full lg:w-auto h-auto md:max-w-[540px] lg:z-30 rounded-xl lg:ml-[-100px]"
              alt="doctor"
            />
          </div>
          <div className="lg:flex lg:justify-between lg:flex-col w-full lg:pb-5">
            <div className="mx-auto w-full">
              <h2 className="mb-[50px] text-center lg:mb-4 xl:mb-9">{title}</h2>
              <div>
                <RRenderer
                  data={description}
                  config={{
                    p: "my-4",
                  }}
                />
              </div>
            </div>
            <p className="hidden lg:block text-sm lg:max-w-[500px] xl:max-w-[600px]">
              {quote}
            </p>
          </div>
        </div>
      </div>
      <div className="lg:h-[100px] xl:h-20 hobby-bar px-[30px] py-5 md:py-10 md:px-20 lg:py-5 lg:absolute lg:bottom-0 text-left flex items-center z-10 lg:pr-[10.5%] hobby-bar-inverse 2xl:px-0">
        <div className="w-full mx-auto lg:hidden">
          <p className="text-sm">{quote}</p>
        </div>
      </div>
    </div>
  );
}

export default Doctor2;
