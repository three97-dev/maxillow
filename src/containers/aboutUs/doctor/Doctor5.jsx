import React from "react";
import RRenderer from "../../../components/richtextRenderer";

// Assets and styles
import pattern from "../../../images/pattern.svg";
import patternBlue from "../../../images/pattern-blue.svg";

function Doctor5({ title, description, src, quote, doctor }) {
  return (
    <div className="relative mt-[75px] lg:mt-[100px]">
      <div className="mx-auto flex flex-col relative px-[30px] md:px-[81px] xl:px-[140px] mb-[50px] md:mb-20 lg:mb-0 doctor">
        <div className="flex flex-col items-end space-y-[50px] lg:z-20 lg:items-stretch lg:space-y-0 lg:flex-row-reverse">
          <div className="lg:self-end w-full lg:max-w-[400px] relative flex top-[-5px]">
            <img src={patternBlue} className="pattern-1 inverse z-10" alt="" />
            <img
              src={src}
              className="mx-auto w-full md:max-w-[540px] lg:z-30 rounded-xl px-10 lg:px-0"
              alt="doctor"
            />
          </div>
          <div className="w-full lg:pb-[100px] xl:pb-[153px]">
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
          </div>
        </div>
      </div>
      <div className="hobby-bar px-[30px] md:px-[81px] xl:px-[140px] py-5 md:py-10 lg:py-5 lg:absolute lg:bottom-0 text-left flex items-center z-10 lg:pl-[10.5%]">
        <div className="">
          <p className="text-sm lg:max-w-[440px] xl:max-w-[600px]">{quote}</p>
        </div>
      </div>
    </div>
  );
}

export default Doctor5;
