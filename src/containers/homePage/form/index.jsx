import React from "react";
import Form from "./Form";

import RRenderer from "../../../components/richtextRenderer";

import "./index.scss";

function FormSection({ image, title, description }) {
  return (
    <div className="form-section-background py-16 px-[30px]">
      <div className="max-w-[1261px] mx-auto">
        <h2 className="text-center pb-8 lg:pb-[30px]">{title}</h2>
        <RRenderer
          data={description}
          config={{
            p: `text-[#696969] max-w-[1088px] mx-auto lg:text-center mb-8 lg:mb-[34px]`,
          }}
        />
        <div className="flex">
          <img className="hidden lg:block flex-shrink-0 h-[310px] mr-16" src={image.file.url} alt={image.title}/>
          <div className="w-full">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
