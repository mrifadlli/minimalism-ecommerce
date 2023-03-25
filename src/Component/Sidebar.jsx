import React from 'react';
import { Link } from 'react-router-dom';
import { TbSquareRoundedArrowLeftFilled } from 'react-icons/tb';

const Sidebar = ({ isOpen, handleClose, dropDown, setDropDown }) => {
  return (
    <div className={`${isOpen ? `left-0` : `-left-full`} w-full top-0 fixed bg-[#eeeeee] h-full shadow-2xl md:w-[35vw] xl:max-w-[27vw] transition-all duration-500 z-20 px-4 lg:px-[35px]`}>
      <div className="flex mt-4 justify-between">
        <h3 className="text-xl">Hello, there.</h3>
        <TbSquareRoundedArrowLeftFilled onClick={handleClose} className="text-3xl cursor-pointer" />
      </div>
      <div className="h-screen">
        <ul className="mt-8 text-lg cursor-pointer">
          <Link to={'/products'} onClick={handleClose}>
            <li className="mb-3 border-4 text-center w-full rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out">Products</li>
          </Link>
          <li className="mb-3 border-4 text-center w-full rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out" onClick={() => setDropDown(!dropDown)}>
            Collection
          </li>
          <ul className={`${dropDown ? `block` : `hidden`} w-full px-8`}>
            <Link to={'/products/tshirt'} onClick={handleClose}>
              <li className="mb-2 border-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out items-center text-center">T-Shirt</li>
            </Link>
            <Link to={'/products/oversized'} onClick={handleClose}>
              <li className="mb-2 border-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out items-center text-center">Oversized</li>
            </Link>
            <Link to={'/products/jacket'} onClick={handleClose}>
              <li className="mb-2 border-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out items-center text-center">Outwear</li>
            </Link>
          </ul>
        </ul>
        <Link to={'/login'} onClick={handleClose}>
          <div className="flex mx-auto mt-9">
            <button className="w-full border-2 border-black mx-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out text-lg py-1">Login</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
