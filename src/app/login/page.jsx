'use client'
import Navbar from '@/Components/Navbar';
import Link from 'next/link';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
const Page = () => {
    const router = useRouter()
    const { status } = useSession()
    if (status === 'authenticated') {
        router.push('/dashboard')

    }
    else {
        return (
            <>
                <Navbar />
                <div className='min-h-screen flex items-center justify-center bg-super-color shadow-lg'>

                    <div className='flex flex-col items-center border border-black p-12 px-24 rounded-lg bg-slate-200'>


                        <label className='text-black'>Email</label>
                        <input type='email' className='border border-black p-2 rounded' />

                        <label className='text-black'>Password</label>
                        <input type='password' className='border border-black p-2 rounded' />
                        <button className='bg-black text-white hover:bg-black-dark p-2 rounded mt-4'>
                            Login
                        </button>

                        <p className='my-2'>or</p>

                        <button className='bg-black text-white hover:bg-black-dark p-2 rounded' onClick={() => signIn('google')}>
                            Sign Up with Google <FaGoogle className='inline-block ml-2' />
                        </button>

                        <span className='text-black mt-2'>New User? <Link href='/signup' className='font-bold'>Register!</Link></span>
                    </div>
                </div>
            </>
        );
    };
}

export default Page;
