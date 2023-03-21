import React from 'react';

const IklanProduct = ({image,title,subtitle}) => {
    return (
        <>
            <div className='text-center flex justify-center flex-col lg:flex-row
            items-center lg:text-left gap-7  bg-gray-100 p-4'>
                <img  src={image} 
                    alt='iklan kaos '
                    className='h-60 w-400 '
                />
                <div>
                    <h1 className='text-3xl font-semibold mb-2'>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </div> 
        </>
    );
}

export default IklanProduct;
