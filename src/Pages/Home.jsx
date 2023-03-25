import React from "react";
import hero1 from "../Component/assets/hero1.png";
import hero2 from "../Component/assets/hero2.png";
import hero3 from "../Component/assets/hero3.png";
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { IoLeafSharp } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-auto bg-[#eeeeee] px-6 lg:px-12 mt-10 lg:mt-14">
      <div className="mt-0 mx-3">
        <img src={hero2} alt="hero2" className="" />
      </div>
      <div className="flex justify-between">
        <div className="w-3/5 mt-2 mx-3">
          <img src={hero1} alt="hero1" className="" />
        </div>
        <div className="w-2/5 mt-2 mr-3 items-center justify-center text-center">
          <img src={hero3} alt="hero3" className="" />
          <Link to={"/products"}>
            <button className="items-center justify-center border-2 border-solid border-white w-[90%] my-2 py-1 lg:mt-6 md:py-3 lg:py-3 rounded-full bg-white text-sm md:text-lg sm:text-lg lg:text-lg hover:bg-black hover:text-white ease-in-out duration-300 transition-all">
              Shoping Now
            </button>
          </Link>
        </div>
      </div>
      <div className="container grid grid-cols-2 lg:grid-cols-4 mx-3 mt-14 mb-5 border-t-4 border-b-4 text-center items-center">
        <div className="lg:p-16 p-9 border-r-4 lg:border-r-4">
          <div className="flex justify-center mb-2">
            <FaShippingFast className="text-4xl" />
          </div>
          <h3 className="text-base">Fast, Free Shipping</h3>
          <span className="text-xs">Free Shipping on nationwide</span>
        </div>
        <div className="lg:p-16 p-9 lg:border-r-4">
          <div className="flex justify-center mb-2">
            <GiReturnArrow className="text-4xl" />
          </div>
          <h3 className="text-base">Wory-Free Returns</h3>
          <span className="text-xs">Terms and conditions apply</span>
        </div>
        <div className="lg:p-16 p-9 border-r-4 border-t-4 lg:border-t-0 lg:border-r-4">
          <div className="flex justify-center mb-2">
            <IoLeafSharp className="text-4xl" />
          </div>
          <h3 className="text-base">Ecogreen Stuff</h3>
          <span className="text-xs">Industry ecosystem care</span>
        </div>
        <div className="lg:p-16 p-9 border-t-4 lg:border-t-0 ">
          <div className="flex justify-center mb-2">
            <BsInstagram className="text-4xl" />
          </div>
          <h3 className="text-base">Follow us</h3>
          <span className="text-xs">For-Newest article</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
