"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import Navbar from '@/Components/Navbar';

import Link from 'next/link';
const page = () => {
    const { data: session } = useSession();

    return (

        <div>
            <Navbar />
            <h1 className='text-3xl font-extrabold text-red-950 pl-7 pt-6'>Welcome, {session?.user?.name}</h1>
            <div className='flex flex-col items-center justify-center'>
                <div className="w-full max-w-md p-6 rounded-3xl shadow-2xl shadow-gray-950 mt-9 ">
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
            </div>

        </div>
    )

}


export default page