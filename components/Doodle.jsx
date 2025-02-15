import React from "react";
import leaf from "../public/doodles/Vector.svg";
import star from "../public/doodles/Star.svg";
import smallStar from "../public/doodles/smallStar.svg";
import Image from "next/image";
import aLetter from "../public/doodles/A.svg";
import bLetter from "../public/doodles/B.svg";
import cLetter from "../public/doodles/C.svg";

const Doodle = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Image
        src={leaf}
        alt="top mid leaf"
        className="absolute top-[50px] left-[835px]"
      />
      <Image
        src={leaf}
        alt="left leaf"
        className="absolute top-[327px] left-[28px]"
      />
      <Image
        src={star}
        alt="mid star"
        className="absolute top-[477.85px] left-[695px]"
      />
      <Image
        src={smallStar}
        alt="bottom star"
        className="absolute bottom-[50.44px] left-[136px]"
      />
      <Image
        src={aLetter}
        alt="A letter"
        className="absolute bottom-[106.81px] left-[293px]"
      />
      <Image
        src={bLetter}
        alt="B letter"
        className="absolute top-[378.5px] left-[518px]"
      />
      {/* <Image
        src={cLetter}
        alt="C letter"
        className="absolute top-[600px] left-[41px]"
      /> */}
    </div>
  );
};

export default Doodle;
