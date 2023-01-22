import React from 'react';

const AboutSection = () => {
    return (
        <div className='bg-gray-200 '>
            <div className='container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 px-3'>
                <div className='flex items-center'>
                    <div>
                        <h2 className='text-4xl font-bold uppercase lg:py-6 py-3'>About US</h2>
                        <div className='lg:w-[500px] w-full'>
                            <p>BytesAlgo is a rapidly growing upcoming startup specializing in IT services, from designing to development until deployment. It is headquartered in India. It is a data-driven enterprise with a thriving atmosphere. Currently, we are working on cloud-based products in the transport and logistics market. We are a young and enthusiastic team of motivated individuals with plenty of field experience looking for people with the same outlook.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/wpqQD8c/Top-10-Ranking-About-Us-Pages.png" className='h-[500px] object-cover' alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;