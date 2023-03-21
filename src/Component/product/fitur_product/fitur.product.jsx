import React, {useState} from 'react';
import {BiLike} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const FiturProduct = ({image,nama,desc,price,like}) => {

    const [tambah, setTambah] = useState(Number(like))

    return (
        <>
            <div className='bg-white rounded-lg shadow-lg'>
                <Link to="/" >
                    <div>
                        <img src={image} 
                            alt="product" 
                            className='rounded-t-lg h-44 w-full' 
                        />
                    </div>
                </Link>
                <div className='m-2'>
                    <h3 className='font-semibold'>{nama}</h3>
                    <p className='text-xs'>{desc}</p>
                    <div className='flex justify-between items-center mt-2 mr-2'>
                        <div>
                            <p> Rp{price}</p>
                            <div className='flex justify-center items-center mt-2 gap-2'>
                                <BiLike cursor="pointer" size="20px" onClick={() => setTambah(tambah + 1)}/>
                                <p>Like  {tambah} </p>
                            </div>
                        </div>
                        <div>
                            <AiOutlineShoppingCart cursor="pointer" size="20px" className='-mt-5' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FiturProduct;
