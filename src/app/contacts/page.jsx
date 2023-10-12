"use client";

import Navbar from '@/Components/Navbar';
import React from 'react';
import contact from '../../assets/contact.jpg'

import Image from 'next/image';
const Contacts = () => {
    return (
        < div className=''>
        <Navbar />
            <div className="min-h-screen flex flex-row-reverse items-center justify-around p-3   ">

                <div className="w-full max-w-md p-6 rounded-3xl shadow-2xl shadow-gray-950">
                    <p className="text-center mb-4">Want to know more? Reach out to us</p>
                    <form action="" method="post" className="flex flex-col space-y-4 ">
                        <label className="text-sm">Full Name</label>
                        <input type="text" className="border border-black py-2 px-3 rounded-3xl" />

                        <label className="text-sm">Email</label>
                        <input type="email" className="border border-black py-2 px-3 rounded-3xl" />

                        <label className="text-sm">You are</label>
                        <input type="text" className="border border-black py-2 px-3 rounded-3xl" />

                        <label className="text-sm">Message</label>
                        <textarea className="border border-black py-2 px-3 h-24 rounded-2xl"></textarea>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded-full">
                            Submit
                        </button>
                    </form>
                </div>

                <div className=''>
                <Image src={contact} height={100} width={100} className='object-cover h-max w-max' />

                    Wanna ask as some thing? Contact Us
                </div>
            </div>
        </div>
    );
};

export default Contacts;
