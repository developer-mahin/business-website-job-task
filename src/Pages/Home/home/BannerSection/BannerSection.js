import React from 'react';
import "./BannerSection.css"

const BannerSection = () => {

    return (
        <div className='banner flex justify-center items-center'>
            <div className='lg:w-[600px] w-full px-3'>
                <h2 className='uppercase text-center lg:text-5xl text-2xl font-bold text-gray-800 lg:py-2'>We help your business</h2>
                <p className='text-center lg:text-lg text-base py-2 font-medium'>Is is a long established fact that a render will be distracted by the readable content of a page when looking at its layout</p>
                <div className='text-center'>
                    <button className='uppercase px-8 py-3 bg-white text-black rounded-lg font-medium' >Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;