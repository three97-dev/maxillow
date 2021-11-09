import React from "react";
import RRenderer from "../../../components/richtextRenderer";

// Assets and styles
import patternBlue from "../../../images/pattern-blue.svg";

function Doctor1({ title, description, src, quote, doctor }) {
  return (
    <div className="relative mt-[75px] lg:mt-[100px]">
      <div className=" mx-auto flex flex-col relative px-[30px] md:px-[81px] lg:px-[0px] 2xl:px-[140px] mb-[50px] md:mb-20 lg:mb-0 doctor">
        <div className="hidden md:block pattern-2-container inverse">
          <img src={patternBlue} className="pattern-2" alt="pattern" />
        </div>
        <div className="flex flex-col items-end space-y-[50px] lg:z-20 lg:items-stretch lg:space-y-0 lg:flex-row-reverse lg:pl-[10.5%] 2xl:p-0">
          <div className="w-full relative flex top-[13px] lg:flex-1">
            <img src={patternBlue} className="pattern-1 inverse z-10" alt="" />
            <img
              src={src}
              className="mx-auto w-full md:max-w-[540px] lg:z-30 xl:max-w-[580px] rounded-xl"
              alt="doctor"
            />
          </div>
          <div className="lg:max-w-[450px] xl:max-w-[600px] lg:pb-[120px] xl:pb-[153px]">
            <div className="mx-auto w-full">
              <h2 className="mb-[50px] text-center lg:mb-4 xl:mb-9">{title}</h2>
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
      <div className="hobby-bar px-[30px] md:px-[81px] lg:px-[0px] 2xl:px-[140px] py-5 md:py-10 lg:py-5 lg:absolute lg:bottom-0 text-left flex items-center z-10 lg:pl-[10.5%]">
        <div className="">
          <p className="text-sm lg:max-w-[500px] xl:max-w-[600px]">{quote}</p>
        </div>
      </div>
    </div>
  );
}

export default Doctor1;
