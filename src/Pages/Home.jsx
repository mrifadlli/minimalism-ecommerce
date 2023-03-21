import React from "react";


const Home = () => {
  return (
    <div className="mx-auto bg-[#eeeeee] px-6 lg:px-12 mb-3 mt-10 lg:mt-14">
      <div className="mt-0 mx-3">
        <img src="../../assets/hero2.png" alt="hero2" className="" />
      </div>
      <div className="flex justify-between">
        <div className="w-3/5 mt-2 mx-3">
          <img src="../../assets/hero1.png" alt="hero1" className="" />
        </div>
        <div className="w-2/5 mt-2 mr-3 items-center justify-center text-center">
          <img src="../../assets/hero3.png"  alt="hero3" className="" />
          <button className="items-center justify-center border-2 border-solid border-white w-[90%] my-2 py-1 lg:mt-6 md:py-3 lg:py-3 rounded-full bg-white text-sm md:text-lg sm:text-lg lg:text-lg hover:bg-black hover:text-white ease-in-out duration-300 transition-all">
            Shoping Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
