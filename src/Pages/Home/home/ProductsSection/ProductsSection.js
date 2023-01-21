import React from 'react';
import { AiOutlineStar } from "react-icons/ai";

const ProductsSection = () => {
    return (
        <div className='lg:py-20 py-6 px-3 container mx-auto'>
            <h2 className='uppercase text-center lg:text-4xl text-2xl font-bold text-gray-700'>Our products</h2>
            <div>
                <div>
                    <AiOutlineStar className='text-xl'></AiOutlineStar>
                    <h2>SEO</h2>
                    <p>It is a long established fact that a reader will be distracted by the</p>
                </div>
                <div>
                    <AiOutlineStar className='text-3xl p-8 rounded-full bg-slate-300 text-white'></AiOutlineStar>
                    <h2>BRANDING</h2>
                    <p>It is a long established fact that a reader will be distracted by the</p>
                </div>
                <div>
                    <AiOutlineStar className='text-3xl p-8 rounded-full bg-slate-300 text-white'></AiOutlineStar>
                    <h2>LOGO</h2>
                    <p>It is a long established fact that a reader will be distracted by the</p>
                </div>
            </div>
        </div>
    );
};

export default ProductsSection;