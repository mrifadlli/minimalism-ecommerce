import React from 'react';
import { NavLink } from 'react-router-dom';
import FilterPrice from './filter.price';
import FilterSize from './filter.size';

const FilterProduct = () => {
    return (
        <>
            <div className='bg-slate-100 border py-2.5 px-4'>
                <div className='hidden lg:block'>
                    <h2 className='mb-5 text-2xl font-semibold pl-3'>Categories</h2>  
                        <div className="mb-3 p-2 rounded-lg">
                            <ul>
                                <NavLink to="/product/t-shirt">
                                    <li className='bg-white p-3 rounded-xl mb-2'>
                                        T-Shirt
                                    </li>
                                </NavLink>
                                <NavLink to="/product/t-shirt">
                                    <li className='bg-white p-3 rounded-xl mb-2'>
                                        OverSized
                                    </li>
                                </NavLink>
                                <NavLink to="/product/t-shirt">
                                    <li className='bg-white p-3 rounded-xl mb-2'>
                                        Jackets
                                    </li>
                                </NavLink>
                            </ul>
                        </div>
                    <FilterSize 
                        XXL="xxl"  
                        XL="xl"
                        L="l"
                        M="m"
                        S="s" 
                    />
                    <FilterPrice />     
                </div>
            </div>    
        </>
    );
}

export default FilterProduct;
