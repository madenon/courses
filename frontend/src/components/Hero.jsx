import React from "react";
import { assets } from "../assets/assets";
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 shadow-md">
      {/* Hero lef Side */}
      <div className="w-full hero sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ">
        <div className="text-[#414141] border-b-4">
          <div className="flex items-center gap-2">
          <p className="w-8 md:w-11 h-[2px] bg-white"></p>
          <p className="font-medium text-sm md:text-base text-white">
              {" "}
              NOS MEILLEUR VENTE
            </p>
          </div>
          <h1 className="prata-regular text-3xl text-black/100  sm:py-3 lg:text-5xl leading-relaxed shadow-md">
            Derniers arrivages
          </h1>
          {/* <img
                src={assets.achat_en_ligne}
                className="w-36 rounded-full  items-center text-center animate-bounce "
                alt=""
              /> */}
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base text-white">Boutique</p>
            <p className="w-8 md:w-11 h-[2px] bg-white"></p>
          </div>
        </div>
      </div>


      {/* hero gauche */}
      <img src={assets.banner} className="w-full sm:w-1/2 " alt="" />
    </div>
  );
};

export default Hero;
