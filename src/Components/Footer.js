import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-20 justify-items-center'>
                <div>
                    <h2 className='text-3xl font-bold text-gray-700'>About Company</h2>
                    <p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-gray-700'>Quick Links</h2>
                    <div>
                        <Link className='block lg:my-0 my-2' to="/">Home</Link>
                        <Link className='block lg:my-0 my-2' to="products">Products</Link>
                        <Link className='block lg:my-0 my-2' to="/pricing">Pricing</Link>
                        <Link className='block lg:my-0 my-2' to="/contact_us">Contact Us</Link>
                    </div>
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-gray-700'>Contact Us</h2>
                    <p><a href="mailto:info@company.com">info@company.com</a></p>
                    <p><a href='tel:+91 079 00000000'>+91 079 00000000</a></p>
                    <div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;