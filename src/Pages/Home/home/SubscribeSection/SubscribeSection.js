import React from 'react';

const SubscribeSection = () => {
    return (
        <div className='bg-[#42CA80] lg:py-20 py-10'>
            <div className='lg:w-[900px] w-full mx-auto px-3 lg:flex justify-center items-center'>
                <div>
                    <input
                        type="email"
                        name="email"
                        id=""
                        className='px-6 py-3 border-2 border-gray-200 rounded-md bg-transparent outline-none text-gray-100 placeholder:text-gray-100 lg:w-[500px] w-3/5'
                        placeholder='Email ID'
                    />
                    <button className='lg:px-8 px-4 py-3 border-2 border-gray-100 rounded-md bg-gray-100 text-[#42CA80] lg:ml-14 ml-4'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    );
};

export default SubscribeSection;