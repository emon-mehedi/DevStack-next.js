import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Technologies | DevStack",
  description: "...",
};

export default function Technologies ({children}:{children:React.ReactNode}){

  return (
    <div className="container mx-auto px-2 md:px-0 mt-5">
      <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left mb-3">
        Explore the <span className=" text-[#cc4fb8]">Technolgies</span>
      </h1>
      <p className="text-center md:text-left mb-3">
        Pick one technology per category to build your ideal stack
      </p>

      {children}
    </div>
  );
}

