import Image from "next/image";
import React from "react";
import ellipse1 from "../public/ellipse/Ellipse2887.svg";
import ellipse2 from "../public/ellipse/Ellipse2886.svg";
import ellipse3 from "../public/ellipse/Ellipse2889.svg";

const Ellipse = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Image
        src={ellipse1}
        alt="ellipse"
        className="absolute top-[22px] left-[387px]"
      />
      <Image
        src={ellipse2}
        alt="ellipse"
        className="absolute top-[317px] left-[790px]"
      />
      <Image
        src={ellipse3}
        alt="ellipse"
        className="absolute bottom-[167px] left-[78px]"
      />
    </div>
  );
};

export default Ellipse;
