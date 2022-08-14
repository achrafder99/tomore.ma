import React from "react";
import cropped_Logo_TOOMORE from "../Images/cropped_Logo_TOOMORE.webp"

export const Cover1 = () => {
  const backgroundimage = {
    backgroundImage: `url(${cropped_Logo_TOOMORE})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }
  return (
    <div className="relative min-h-[450px]  w-full " style={backgroundimage}></div>
  );
};

export default Cover1;
