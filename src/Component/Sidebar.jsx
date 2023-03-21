import React, { useState } from "react";
import { TbSquareRoundedArrowLeftFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/product" className="text-center">
          <li className="mb-3 border-4 text-center w-full rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
            Product
          </li>
        </NavLink>
          <li
            className="mb-3 border-4 text-center w-full rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
            onClick={() => setDropDown(!dropDown)}
          >
            <button href="#colection" className="">
              Colection
            </button>
          </li>
          {dropDown &&  
              <ul >
                <NavLink to="/product/t-shirt">
                  <li className="mb-2 border-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out items-center text-center">
                  T-shirt
                  </li>
                </NavLink> 
                <NavLink to="/product/oversized">
                  <li className="mb-2 border-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out items-center text-center">
                    Oversized
                  </li>
                </NavLink>
                <NavLink to="/product/jacket">
                  <li className="mb-2 border-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out items-center text-center">
                    Jacket
                  </li>
                </NavLink>
              </ul>
          }
        </ul>
        <div className="flex mx-auto mt-9">
          <button className="w-full border-2 border-black mx-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out text-lg py-1">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
