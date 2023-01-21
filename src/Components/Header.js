import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HiX, HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
    const [open, setOpen] = useState(false);

    const navLink = <>
        <Link className='mx-3 lg:inline block lg:my-0 my-2' to="/">Home</Link>
        <Link className='mx-3 lg:inline block lg:my-0 my-2' to="/products">Products</Link>
        <Link className='mx-3 lg:inline block lg:my-0 my-2' to="/pricing">Pricing</Link>
        <Link className='mx-3 lg:inline block lg:my-0 my-2' to="/contact_us">Contact Us</Link>
    </>

    return (

        <div className='sticky bg-[#e7e7e7b9] top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-lg'>
            <div>
                <div className='container mx-auto py-2'>
                    <nav className='md:container mx-auto flex justify-between items-center relative'>
                        <Link to="/" className='flex items-center md:ml-0 ml-2'>

                            <img src="https://i.ibb.co/93VdwBc/Developer-Mahin.png" className="w-80" alt="" />

                        </Link>
                        <ul className={`md:bg-transparent rounded-lg md:flex md:justify-end md:static absolute w-full z-50 ${open ? 'top-16 bg-[#e7e7e7e5] w-10/12 text-left px-4' : 'top-[-260px]'}`}>
                            {navLink}
                        </ul>
                        <div className='md:hidden md:pr-0 pr-3'>
                            {
                                open ?
                                    <HiX onClick={() => setOpen(!open)} className="h-9 w-9 text-black cursor-pointer" /> :
                                    <HiMenuAlt3 onClick={() => setOpen(!open)} className="h-9 w-9 text-black cursor-pointer" />
                            }
                        </div>
                    </nav>
                </div>
            </div>

        </div >
    );
};

export default Header;