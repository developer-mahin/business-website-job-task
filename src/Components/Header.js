import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { HiX, HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
    const [open, setOpen] = useState(false);

    const navLink = <>
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "lg:mx-5 mx-0 lg:inline block lg:my-0 my-2 text-[#41CB80]"
                    : "lg:mx-5 mx-0 lg:inline block lg:my-0 my-2"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/products"
            className={({ isActive }) =>
                isActive ? "lg:mx-5 mx-0 lg:inline block lg:my-0 my-2 text-[#41CB80]"
                    : "lg:mx-5 mx-0 lg:inline block lg:my-0 my-2"
            }
        >
            Products
        </NavLink>
        <NavLink
            to="/pricing"
            className={({ isActive }) =>
                isActive ? "lg:mx-5 mx-0 lg:inline block lg:my-0 my-2 text-[#41CB80]"
                    : "lg:mx-5 mx-0 lg:inline block lg:my-0 my-2"
            }
        >
            Pricing
        </NavLink>
        <NavLink
            to="/contact_us"
            className={({ isActive }) =>
                isActive ? "lg:mx-5 mx-0 lg:inline block lg:my-0 my-2 text-[#41CB80]"
                    : "lg:mx-5 mx-0 lg:inline block lg:my-0 my-2"
            }
        >
            Contact Us
        </NavLink>
    </>

    return (

        <div className='sticky bg-[#e7e7e7b9] top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-lg'>
            <div>
                <div className='container mx-auto py-2 px-3'>
                    <nav className='md:container mx-auto flex justify-between items-center relative'>
                        <Link to="/" className='flex items-center md:ml-0 ml-2'>

                            <img src="https://i.ibb.co/MZnJshQ/1267-768x591-1-removebg-preview.png" className="w-40" alt="" />

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