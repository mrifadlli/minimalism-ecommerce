import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillGridFill } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import Sidebar from "./Sidebar";
import SidebarCart from "./SidebarCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  let [dropDown, setDropDown] = useState(false);
  const handleClose = () => {
    setCartOpen(false);
    setIsOpen(false);
    setDropDown(false);
  };

  return (
    <div className="bg-[#eeeeee]">
      <div className="flex justify-between mx-auto w-[92%] py-2 px-2">
        <button
          title="Navigation"
          onClick={() => setIsOpen(!isOpen)}
          className="hover:bg-black hover:text-white ease-in-out transition-all duration-200 border py-2 px-3 rounded-full"
        >
          <BsFillGridFill className="cursor-pointer text-lg" />
        </button>
        <div className="text-center items-center">
          <Link to="/">
            <h2
              className="text-2xl font-extralight px-3 border-b-4 border-t-4 cursor-pointer"
              title="Home"
              onClick={handleClose}
            >
              Mininalism
            </h2>
          </Link>
        </div>
        <div className="flex justify-between items-center gap-4">
          <button
            title="Cart"
            className="hover:bg-black hover:text-white ease-in-out transition-all duration-200 border py-2 px-3 rounded-full"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <FiShoppingBag className="cursor-pointer text-lg" />
          </button>
          <button
            title="Login"
            className="hover:bg-black hover:text-white ease-in-out transition-all duration-200 border py-2 px-4 rounded-2xl hidden lg:block"
          >
            Login
          </button>
        </div>
      </div>
      <Sidebar
        isOpen={isOpen}
        handleClose={handleClose}
        dropDown={dropDown}
        setDropDown={setDropDown}
      />
      <SidebarCart cartOpen={cartOpen} handleClose={handleClose} />
    </div>
  );
};

export default Navbar;
