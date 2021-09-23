import React from "react";
import RRenderer from "../../../components/richtextRenderer";

import "./index.scss";

const Section = ({ title, subTitle, image, description }) => {
  return (
    <div className="">
      <div>
        {/* {title && <h1 className="mb-4">{title}</h1>} */}
        <h3 className="mb-[50px]">{title}</h3>
        <div className="h-[230px] md:h-[200px] 2xl:h-[150px]">
          <RRenderer
            data={description}
            config={{
              p: "mt-2",
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
