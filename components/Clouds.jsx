import Image from "next/image";
import React from "react";
import topLeftCloud from "../public/clouds/Vector13.svg";
import halfScreenCloud from "../public/clouds/Vector1.svg";
import topSmallCloud from "../public/clouds/Vector12.svg";
import bottomSmallCloud from "../public/clouds/Vector11.svg";

const Clouds = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Image
        src={topLeftCloud}
        alt="top left cloud"
        className="inline-block absolute"
      />
      <Image
        src={topSmallCloud}
        alt="top small cloud"
        className="absolute top-[53.64px] left-[640px]"
      />
      <Image
        src={bottomSmallCloud}
        alt="bottom small cloud"
        className="absolute top-[753.16px] left-[127px] object-contain"
      />
      <Image
        src={halfScreenCloud}
        alt="Big cloud"
        className="inline-block absolute bottom-0 right-0 object-contain"
      />
    </div>
  );
};

export default Clouds;
