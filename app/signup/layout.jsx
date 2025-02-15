import React from "react";
import Clouds from "@/components/Clouds";
import Ellipse from "@/components/Ellipse";
import Doodle from "@/components/Doodle";
import Logo from "@/components/Logo";
import RocketMan from "@/components/RocketMan";

export const layout = ({ children }) => {
  return (
    <div className=" top-0 left-0 w-full h-full absolute z-0" id="background">
      <Ellipse className="z-0" />
      <Doodle className="z-0" />
      <RocketMan className="z-1 " />
      <Clouds className="z-2" />
      <Logo className="z-3 m-3" />
      <div className="flex items-center justify-center h-screen w-screen z-4">
        {children}
      </div>
    </div>
  );
};
