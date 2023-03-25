import React from 'react';
import { TbSquareRoundedArrowRightFilled } from 'react-icons/tb';
import { GrCart } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const SidebarCart = ({ cartOpen, handleClose }) => {
  return (
    <div className="">
      <div className={`${cartOpen ? `right-0` : `-right-full`} w-full top-0 fixed bg-[#eeeeee] h-full shadow-2xl md:w-[35vw] xl:max-w-[27vw] transition-all duration-500 z-20 px-4 lg:px-[38px]`}>
        <div className="mt-4 flex justify-between">
          <TbSquareRoundedArrowRightFilled className="cursor-pointer text-3xl" onClick={handleClose} />
          <GrCart className="text-3xl" />
        </div>
        <div className="text-lg font-semibold mt-9">
          <h3>Empty Cart :</h3>
        </div>
        <div className="align-bottom mt-5">
          <h5 className="text-sm">Login First</h5>
        </div>
        <Link to={'/login'} onClick={handleClose}>
          <div className="flex mt-[500px]">
            <button className="mx-auto w-full py-1 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out text-lg ">Login</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SidebarCart;
