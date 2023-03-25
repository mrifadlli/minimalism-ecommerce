import React, { useState } from 'react';
import { dataProduct, iklanProduct } from '../../../data/data.js';
import IklanProduct from '../../iklan_Product/iklanProduct';
import FilterProduct from '../filter_product/filterProduct';
import FiturProduct from '../fitur_product/fiturProduct.jsx';

const TShirtProduct = () => {
  const [currentProduct] = useState(dataProduct);

  const filterTshirt = currentProduct.filter((value) => value.kategori === 't-shirt');

  return (
    <>
      <section>
        <div className="store-wrapper">
          <div className="mb-20">
            <h1 className="mb-7 text-3xl mx-9 my-20">T-Shirts</h1>
            {iklanProduct
              .filter((items) => items.kategori === 't-shirt')
              .map((items, index) => (
                <IklanProduct image={items.image} title={items.title} subtitle={items.subtitle} key={index} />
              ))}
          </div>
          <div className="lg:flex lg:justify-center lg:flex-row ">
            <div className="w-3/12 hidden lg:block">
              <FilterProduct />
            </div>
            <div
              className="w-full lg:w-9/12 grid xs:grid-cols-2 
                        sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  gap-5 p-5"
            >
              {filterTshirt.map((value, index) => (
                <FiturProduct image={value.image} nama={value.nama} desc={value.desc} price={value.harga} like={value.like} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TShirtProduct;
