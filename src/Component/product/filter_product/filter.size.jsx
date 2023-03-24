import React from 'react';

const FilterSize = ({XL,XXL,L,M,S}) => {
    return (
        <>
            <h2 className='mb-5 text-2xl font-semibold pl-3'>Size</h2>
            <div className="  mb-3 p-2 rounded-lg">
                <ul className='flex flex-wrap gap-3'>
                    <li className='bg-white p-2 px-4 text-center rounded-xl '>
                        <button to="/product">{XXL}</button>
                    </li>
                    <li className='bg-white p-2 px-4 text-center rounded-xl '>
                        <button to="/product/jacket">{XL}</button>
                    </li>
                    <li className='bg-white p-2 px-4 text-center rounded-xl'>
                        <button to="/product/overSize">{L}</button>
                    </li>
                    <li className='bg-white p-2 px-4 text-center rounded-xl'>
                        <button to="/product/overSize">{M}</button>
                    </li>
                    <li className='bg-white p-2 px-4 text-center rounded-xl'>
                        <button to="/product/overSize">{S}</button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default FilterSize;
