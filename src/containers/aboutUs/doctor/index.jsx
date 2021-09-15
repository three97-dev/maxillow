import React from "react";
import Doctor1 from "./Doctor1";
import Doctor2 from "./Doctor2";
import Doctor3 from "./Doctor3";
import Doctor4 from "./Doctor4";
import "./index.scss";

const Doctor = ({ doctor, ...props }) => {
  return (
    <>
      {doctor === 1 && <Doctor1 {...props} />}
      {doctor === 2 && <Doctor2 {...props} />}
      {doctor === 3 && <Doctor3 {...props} />}
      {doctor === 4 && <Doctor4 {...props} />}
    </>
  );
};

export default Doctor;
