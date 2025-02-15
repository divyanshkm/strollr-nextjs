import React from "react";
import logo from "../public/logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src={logo}
        alt="logo"
        className="absolute top-[145px] left-[97px]"
      />
    </div>
  );
};

export default Logo;
