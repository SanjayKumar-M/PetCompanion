'use client'
import Image from 'next/image';
import React from 'react';
import menu from '../assets/menu.png';
import { FaUser, FaPaw, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
const Navbar = () => {
    const { status, data: session } = useSession()

    return (
        <nav className='flex items-center  text-center text-2xl p-4 justify-around '>
            <a href='/' className='text-black font-extrabold p-2 text-3xl font-mono inline-flex gap-2'>
                <span><FaPaw /></span>PetCompanion
            </a>
            <ul className='lg:flex items-center gap-10 cursor-pointer'>
                <li className='hidden lg:flex items-center gap-2 cursor-pointer font-mono text-black font-bold '>
                    <Link href='/' className=''>Home</Link>
                </li>
                <li className='hidden lg:flex items-center gap-10 cursor-pointer font-mono font-bold'>
                    <Link href='/about'>About</Link>
                </li>
                <li className='hidden lg:flex items-center gap-2 cursor-pointer font-mono font-bold'>
                    <Link href='/contacts'>Contact</Link>
                </li>
                <li className='hidden lg:flex items-center gap-2 cursor-pointer font-mono font-bold'>
                    <Link href='/search'>
                        <span className="flex items-center">
                            <FaSearch />
                            <span className="ml-2">Search</span>
                        </span>
                    </Link>
                </li>
                {
                    status === 'authenticated' ? (
                        <li className='hidden lg:flex items-center gap-2 cursor-pointer  border p-3 px-8 rounded-3xl bg-black text-white' onClick={() => signOut()}> <Link href='/signup'>
                            Sign Out
                        </Link></li>
                    ) : (<li className='hidden lg:flex items-center gap-2 cursor-pointer font-mono pb-1 ' > <Link href='/signup'><FaUser /></Link></li>)
                }
            </ul>

            <Image src={menu} width={20} height={20} className='lg:hidden' />
        </nav>
    )
}

export default Navbar;
