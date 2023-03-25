import React from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const Home = () => {
  return (
    <div className="mx-auto bg-[#eeeeee] px-6 lg:px-12 mb-3">
      <div className="mt-0 mx-3">
        <img src={hero2} alt="" className="" />
      </div>
      <div className="flex justify-between">
        <div className="w-3/5 mt-2 mx-3">
          <img src={hero1} alt="" className="" />
        </div>
        <div className="w-2/5 mt-2 mr-3 items-center justify-center text-center">
          <img src={hero3} alt="" className="" />
          <button className="items-center justify-center border-2 border-solid border-white w-[90%] my-2 py-1 lg:mt-6 md:py-3 lg:py-3 rounded-full bg-white text-sm md:text-lg sm:text-lg lg:text-lg hover:bg-black hover:text-white ease-in-out duration-300 transition-all">
            Shoping Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
