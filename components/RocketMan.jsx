import React from "react";
import rocketMan from "../public/rocketMan.svg";
import Image from "next/image";

const RocketMan = () => {
  return (
    <div>
      <Image
        src={rocketMan}
        alt="rocket man"
        className="absolute top-[355px] left-[4px]"
      />
    </div>
  );
};

export default RocketMan;
