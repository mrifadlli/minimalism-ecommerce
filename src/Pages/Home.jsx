import React from "react";
import hero1 from "../Component/assets/hero1.png";
import hero2 from "../Component/assets/hero2.png";
import hero3 from "../Component/assets/hero3.png";
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { IoLeafSharp } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import IklanProduct from "../Component/iklan_Product/iklanProduct";
import { iklanProduct } from "../data/data";

const Home = () => {
  return (
    <div className="mx-auto bg-[#eeeeee] px-6 pt-12 lg:px-12  pb-7">
      <div className="mt-0 mx-3">
        <img src={hero2} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-between">
        <div className="w-3/5 mt-2 mx-3">
          <img src={hero1} alt="hero1" className="" />
        </div>
        <div className="w-2/5 mt-2 mr-3 items-center justify-center text-center">
          <img src={hero3} alt="hero3" className="" />
          <Link to={"/products"}>
            <button className="items-center justify-center border-2 border-solid border-white w-[90%] my-2 py-1 lg:mt-6 md:py-3 lg:py-3 rounded-full text-white bg-black text-sm md:text-lg sm:text-lg lg:text-lg hover:bg-white hover:text-black ease-in-out duration-300 transition-all">
              Shoping Now
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full flex-wrap">
        {iklanProduct.map((items, index) => (
          <IklanProduct
            image={items.image}
            title={items.title}
            subtitle={items.subtitle}
            key={index}
          />
        ))}
      </div>
      <div className="container grid grid-cols-2 lg:grid-cols-4 mx-auto lg:mx-3 md:mx-3 mt-5 mb-5 border-t-4 border-b-4 text-center items-center">
        <div className="container lg:p-16 p-9 border-r-4 lg:border-r-4">
          <div className="flex justify-center mb-2">
            <FaShippingFast className="text-4xl" />
          </div>
          <h3 className="text-base">Fast, Free Shipping</h3>
          <span className="text-xs">Free Shipping order nationwide</span>
        </div>
        <div className="container lg:p-16 p-9 lg:border-r-4">
          <div className="flex justify-center mb-2">
            <GiReturnArrow className="text-4xl" />
          </div>
          <h3 className="text-base">Wory-Free Returns</h3>
          <span className="text-xs">Terms and conditions apply</span>
        </div>
        <div className="container lg:p-16 p-9 border-r-4 border-t-4 lg:border-t-0 lg:border-r-4">
          <div className="flex justify-center mb-2">
            <IoLeafSharp className="text-4xl" />
          </div>
          <h3 className="text-base">Ecogreen</h3>
          <span className="text-xs">Ecosystem care</span>
        </div>
        <div className="container lg:p-16 p-9 lg:border-t-0 md:border-t-0 border-t-4">
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
