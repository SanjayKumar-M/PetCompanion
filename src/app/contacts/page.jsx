"use client";

import Navbar from '@/Components/Navbar';
import React from 'react';
import contact from '../../assets/contact.jpg'

import Image from 'next/image';
const Contacts = () => {
    return (
        < div className=''>
            <Navbar />
            <div className="min-h-screen flex flex-col-reverse items-center justify-around p-3 md:flex-row-reverse">

                <div className="w-full max-w-md p-6 rounded-3xl shadow-2xl shadow-gray-950 ">
                    <p className="text-center mb-4 font-extrabold text-lg">Bark at us anytime! Your pets voices matter</p>
                    <form action="" method="post" className="flex flex-col space-y-4 ">
                        <label className="text-sm" >Full Name</label>
                        <input type="text" className="border border-black py-2 px-3 rounded-3xl" placeholder='Elon Musk' />

                        <label className="text-sm">Email</label>
                        <input type="email" className="border border-black py-2 px-3 rounded-3xl" placeholder='example@email.com' />

                        <label className="text-sm">You are</label>
                        <input type="text" className="border border-black py-2 px-3 rounded-3xl" placeholder='Buyer / Seller' />

                        <label className="text-sm">Message</label>
                        <textarea className="border border-black py-2 px-3 h-24 rounded-2xl" placeholder='Your queries!'></textarea>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded-full">
                            Submit
                        </button>
                    </form>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h1 className='font-bold text-center text-6xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>In a world full of chatter, we're<br /> here to listen to your pets<br /><span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text'> meows and woofs</span></h1>
                    <Image src={contact} height={200} width={200} className="object-contain h-96 w-96 rounded-3xl mt-7 shadow-xl shadow-orange-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />



                </div>
            </div>
        </div>
    );
};

export default Contacts;
