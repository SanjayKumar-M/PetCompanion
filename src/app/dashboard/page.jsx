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
            <h1 className='text-3xl font-extrabold text-red-950 pl-7 pt-6'>My Account</h1>
            <div className='flex flex-col items-center justify-center mt-52 font-extrabold gap-6 text-3xl '>
                <img src={session?.user?.image} className='rounded-full' />
                <h1 >{session?.user?.name}</h1>
                <h1>{session?.user?.email}</h1>


                <Link href='/dashboard/seller'><button className='border mt-9 border-transparent bg-indigo-500 text-white p-3 text-2xl font-extrabold rounded-3xl shadow-2xl '>Wanna Become Seller</button></Link>
            </div>

        </div>
    )

}


export default page