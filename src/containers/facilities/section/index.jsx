import React from "react";
import RRenderer from "../../../components/richtextRenderer";

import "./index.scss";

const Section = ({ title, subTitle, image, description }) => {
  return (
    <div className="flex flex-col justify-between">
      <div>
        {/* {title && <h1 className="mb-4">{title}</h1>} */}
        <h3 className="mb-[50px]">{title}</h3>
        <div>
          <RRenderer
            data={description}
            config={{
              p: "",
            }}
          />
        </div>
      </div>
      <div className="mt-[50px] xl:mt-20">
        <img src={image.file.url} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default Section;
