import React from 'react';
import { CiStar } from "react-icons/ci";

const ProductsSection = () => {
    return (
        <div className='lg:py-20 py-6 px-3 container mx-auto'>
            <h2 className='uppercase text-center lg:text-4xl text-2xl font-bold text-gray-700'>Our products</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 justify-items-center text-center lg:py-6 py-3'>
                <div className='lg:p-6 p-3 shadow-lg rounded-lg border hover:shadow-xl'>
                    <div className='flex justify-center items-center py-3'>
                        <CiStar className='text-7xl text-white rounded-full bg-[#A2D421] p-3 text-center'></CiStar>
                    </div>
                    <h2 className='text-3xl font-semibold text-gray-800 py-2 '>SEO</h2>
                    <p>SEO means Search Engine Optimization and is the process used to optimize a website's technical configuration, content relevance and link popularity so its pages can become easily findable</p>
                </div>
                <div className='lg:p-6 p-3 shadow-lg rounded-lg border hover:shadow-xl'>
                    <div className='flex justify-center items-center py-3'>
                        <CiStar className='text-7xl text-white rounded-full bg-[#A2D421] p-3 text-center'></CiStar>
                    </div>
                    <h2 className='text-3xl font-semibold text-gray-800 py-2'>BRANDING</h2>
                    <p>Branding is the process of creating a distinct identity for a business in the mind of your target audience and consumers. At the the most basic level, branding is made up of a company's logo, visual design, mission, and tone of voice.</p>
                </div>
                <div className='lg:p-6 p-3 shadow-lg rounded-lg border hover:shadow-xl'>
                    <div className='flex justify-center items-center py-3'>
                        <CiStar className='text-7xl text-white rounded-full bg-[#A2D421] p-3 text-center'></CiStar>
                    </div>
                    <h2 className='text-3xl font-semibold text-gray-800 py-2'>LOGO</h2>
                    <p>Logos serve to represent a given organization or company through a visual image that can be easily understood and recognized. A logo generally involves symbols, stylized text or both</p>
                </div>
            </div>
        </div>
    );
};

export default ProductsSection;