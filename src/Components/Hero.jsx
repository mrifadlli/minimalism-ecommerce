import React from "react";
import hero from "../Assets/Hero/hero.png";

function Hero() {
  return (
    <div className="w-full flex justify-between bg-stone-200 px-4 py-8">
      <div className="container lg:w-1/2 pt-12 lg:pt-36 lg:px-11">
        <h1 className="lg:text-6xl md:text-4xlxl sm:text-3xl text-xl font-bold pb-2 lg:pb-5">
          Simplicity All Shape.
        </h1>
        <p className="lg:text-sm lg:font-extralight pb-2 text-black hidden lg:block md:block md:font-thin md:text-xs sm:block sm:font-extralight sm:text-xs pr-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          delectus nihil, beatae molestiae eos officiis possimus suscipit
          deserunt, necessitatibus quibusdam consequatur maiores error placeat
          laboriosam quidem neque? Blanditiis, ex necessitatibus?
        </p>
        <div className="lg:text-right lg:px-16 lg:py-2">
          <button className="bg-black lg:text-base text-xs px-3 py-1 text-[#eeeeee] hover:bg-[#eeeeee] hover:text-black ease-in-out duration-300 lg:py-2 lg:px-3 rounded-lg shadow-2xl">
            Get Started!
          </button>
        </div>
      </div>
      <div className="container mx-auto px-2 py-5 lg:w-1/2 lg:px-4 lg:py-10 bg-[#eeeeee] shadow-xl rounded-md">
        <img src={hero} alt="" className="" />
      </div>
    </div>
  );
}

export default Hero;
