"use client";

import Navbar from '@/Components/Navbar';
import React from 'react';

const Contacts = () => {
    return (
        <>
        <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center p-3 ">

                <div className="w-full max-w-md p-6 border border-black rounded-xlbg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white text-3xl ">
                    <p className="text-center mb-4">Want to know more? Reach out to us</p>
                    <form action="" method="post" className="flex flex-col space-y-4">
                        <label className="text-sm">Full Name</label>
                        <input type="text" className="border border-black py-2 px-3" />

                        <label className="text-sm">Email</label>
                        <input type="email" className="border border-black py-2 px-3" />

                        <label className="text-sm">You are</label>
                        <input type="text" className="border border-black py-2 px-3" />

                        <label className="text-sm">Message</label>
                        <textarea className="border border-black py-2 px-3 h-24"></textarea>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contacts;
