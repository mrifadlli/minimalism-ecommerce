import React, { useState } from "react";
import { TbSquareRoundedArrowLeftFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, handleClose }) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div
      className={`${
        isOpen ? `left-0` : `-left-full`
      } w-full top-0 fixed bg-[#eeeeee] h-full shadow-2xl md:w-[35vw] xl:max-w-[27vw] transition-all duration-500 y-20 px-4 lg:px-[35px]`}
    >
      <div className="flex mt-4 justify-between">
        <h3 className="text-xl">Hello, there.</h3>
        <TbSquareRoundedArrowLeftFilled
          onClick={handleClose}
          className="text-3xl cursor-pointer"
        />
      </div>
      <div className="h-screen">
        <ul className="mt-8 text-lg cursor-pointer">
          <li className="mb-3 border-4 text-center w-full rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
            <a href="#product" className="text-center">
              Product
            </a>
          </li>
          <li
            className="mb-3 border-4 text-center w-full rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
            onClick={() => setDropDown(!dropDown)}
          >
            <a href="#colection" className="">
              Colection
            </a>
          </li>
          <ul className={`${dropDown ? `block` : `hidden`} w-full px-8`}>
            <li className="mb-2 border-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out items-center text-center">
              T-Shirt
            </li>
            <li className="mb-2 border-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out items-center text-center">
              Oversized
            </li>
            <li className="mb-2 border-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out items-center text-center">
              Jacket
            </li>
          </ul>
        </ul>
        <div className="flex mx-auto mt-9">
          <Link to={"/Login"} onClick={handleClose}>
            <button className="w-full border-2 border-black mx-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out text-lg py-1">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
