import React from 'react';
import {IoIosArrowForward} from 'react-icons/io';


const FilterPrice = ({currentProduct, setCurrentProduct,activeJacket,setActiveJacket}) => {




    return (
        <>
            <h2 className='mb-5 text-2xl font-semibold pl-3'>Harga</h2>                
            <div className=" mb-3 p-2 rounded-lg">
                    <ul className=' gap-3'>
                    <li className='bg-white mb-2 p-2 px-2  rounded-xl '>
                        <button>Rp75.000</button>
                    </li>
                        <li className='bg-white mb-2 p-2 px-2  rounded-xl '>
                            <button>Rp125.000 - Rp175.000</button>
                        </li>
                        <li className='bg-white mb-2 p-2 px-2  rounded-xl '>
                            <button>Rp200.000 - Rp250.000</button>
                        </li>
                        <li className='bg-white mb-2 p-2 px-2 flex items-center rounded-xl '>
                            <IoIosArrowForward/> 
                            <button> Rp300.000  </button>
                        </li>
                    </ul>
            </div>  
        </>
    );
}

export default FilterPrice;
