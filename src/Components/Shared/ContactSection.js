import Lottie from "lottie-react";
import React from 'react';
import contact from "../../Assets/contact.json";

const ContactSection = () => {
    return (
        <div className="lg:py-20 py-6">
        <h2 className='uppercase text-center lg:text-4xl text-2xl font-bold text-gray-700'>Contact Us</h2>
            <div className='container mx-auto px-3 grid lg:grid-cols-2 grid-cols-1 gap-6 justify-items-center items-center'>
                <div>
                    <Lottie animationData={contact} loop={true} />
                </div>
                <form>
                    <input
                        className='w-full outline-none border-2 border-gray-500 rounded-lg px-4 py-2 my-2 '
                        type="email"
                        name=""
                        id=""
                        placeholder="Your Email"
                    />
                    <input
                        className='w-full outline-none border-2 border-gray-500 rounded-lg px-4 py-2 my-2 '
                        type="text"
                        name=""
                        id=""
                        placeholder="Subject"
                    />
                    <textarea
                        className='w-full outline-none border-2 border-gray-500 rounded-lg px-4 h-24 py-2' name=""
                        placeholder="Message.."
                    ></textarea>
                    <button className="px-8 py-3 rounded-lg bg-[#26ce7d] text-white hover:bg-[#24af6c]">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;