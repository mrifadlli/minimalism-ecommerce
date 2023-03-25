import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaCartPlus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { dataProduct } from '../../data/data';

const DetailProduct = () => {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [dataProduct[id - 1].image, dataProduct[id].image];

  return (
    <div className="px-5 my-0 bg-[#eeeeee] pt-32 md:h-screen">
      <div className="mx-0 my-auto ">
        <div className="flex flex-col justify-center gap-24 mx-auto px-10 md:px-28 md:flex-row">
          <div className="left md:flex md:flex-row-reverse bg-black gap-2 rounded-md bg-opacity-5 flex-shrink-0 md:w-[600px]  md:h-[600px]">
            <div className=" md:w-4/5">
              <img className="w-full h-[600px] object-cover rounded-md" src={images[selectedImg]} alt="" />
            </div>
            <div className="flex gap-2 md:block md:w-1/5 ml-2 mt-2">
              <img className="w-28 md:w-full h-[150px] object-cover cursor-pointer mb-3 rounded-md" src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
              <img className="w-28 md:w-full h-[150px] object-cover cursor-pointer mb-3 rounded-md " src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
            </div>
          </div>
          <div className="right w-full flex flex-col pt-5 gap-5 shadow-2xl rounded-xl px-2 py-1 mb-10 md:px-8 md:py-4 md:w-1/2 ">
            <span className="name text-xl leading-7 mb-5 md:text-2xl md:leading-8 font-semibold">{dataProduct[id - 1].nama}</span>
            <span className="price text-2xl leading-8 mb-5 ">{dataProduct[id - 1].harga}</span>
            <span className="desc text-sm leading-5 mb-5 text-gray-700 md:text-base  md:leading-6 md:mb-5">{dataProduct[id - 1].desc}</span>

            <div className="cart-button md:mt-3">
              <div className="quantity w-fit flex border-2 border-black border-opacity-20 mr-5 h-10 rounded-full">
                <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))} className="text-base w-10 flex items-center justify-center cursor-pointer border-r-2 border-black border-opacity-20">
                  -
                </button>
                <button className="text-base w-16 px-5 flex items-center justify-center cursor-pointer ">{quantity}</button>
                <button onClick={() => setQuantity((prev) => prev + 1)} className="text-base w-10 flex items-center justify-center cursor-pointer border-l-2 border-black border-opacity-20">
                  +
                </button>
              </div>
              <button className="addtochart flex mt-5 outline-none border-0 h-10 w-44 items-center justify-center cursor-pointer text-base font-medium bg-black text-white   md:grow-0 rounded-full hover:bg-[#eeeeee] hover:text-black hover:border-2 hover:border-black">
                <FaCartPlus className="mr-3" size={20} />
                ADD TO CHART
              </button>
            </div>
            <span className="divider mx-0 my-6 h-3 w-full bg-black bg-opacity-5 rounded-full" />

            <div className="info-item">
              <span className="font-bold text-base block mb-3 ">
                Category : <span className="font-normal cursor-pointer ">{dataProduct[id - 1].kategori}</span>
              </span>
              <span className="font-bold text-base flex   ">
                Share :
                <span className="social-icon flex items-center gap-3 ml-3 bg-sl">
                  <FaFacebookF className="bg-slate-300 p-1 rounded-md" size={22} />
                  <FaTwitter className="bg-slate-300 p-1 rounded-md" size={22} />
                  <FaInstagram className="bg-slate-300 p-1 rounded-md" size={22} />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
