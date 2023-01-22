import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
import { TfiGoogle } from "react-icons/tfi";

const Footer = () => {
    return (
        <>
            <div className='container mx-auto px-3 grid lg:grid-cols-3 grid-cols-1 lg:gap-20 gap-4 lg:justify-items-center lg:py-10 py-8'>
                <div>
                    <h2 className='text-3xl font-bold text-gray-700'>About Company</h2>
                    <p className='py-2'>BytesAlgo is a rapidly growing upcoming startup specializing in IT services, from designing to development until deployment. It is headquartered in India.</p>
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-gray-700'>Quick Links</h2>
                    <div className='py-2'>
                        <Link className='block lg:my-0 my-2' to="/">Home</Link>
                        <Link className='block lg:my-0 my-2' to="products">Products</Link>
                        <Link className='block lg:my-0 my-2' to="/pricing">Pricing</Link>
                        <Link className='block lg:my-0 my-2' to="/contact_us">Contact Us</Link>
                    </div>
                </div>
                <div>
                    <h2 className='text-3xl font-bold text-gray-700'>Contact Us</h2>
                    <div className='py-2'>
                        <p><a className='flex items-center gap-2 text-md' href="mailto:info@company.com"><AiOutlineMail></AiOutlineMail>info@company.com</a></p>
                        <p><a className='flex items-center gap-2 text-md' href='tel:+91 079 00000000'> <BsPhone></BsPhone> +91 079 00000000</a></p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <a href="https://www.facebook.com/" target="blank"><FaFacebookF className='text-2xl text-gray-600'></FaFacebookF></a>
                        <a href="https://twitter.com/home" target="blank"><CgTwitter className='text-3xl text-gray-600'></CgTwitter></a>
                        <a href='https://www.google.com/' target="blank"><TfiGoogle className='text-2xl text-gray-600'></TfiGoogle></a>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-800 py-5 text-center'>
                <p className='text-gray-300 capitalize lg:text-base text-sm'>Copyright &copy; 2023 Code and content all right reserved</p>
            </div>
        </>
    );
};

export default Footer;