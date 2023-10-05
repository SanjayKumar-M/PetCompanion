import Image from 'next/image'
import React from 'react'
import menu from '../assets/menu.png'
import { FaUser ,FaPaw} from "react-icons/fa";
import Link from 'next/link';
const Navbar = () => {

    const navItems = ["Home", "About", "Contact Us"];
    return (
        <nav className='flex items-center  text-center text-2xl p-4 justify-around bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 '>
            <a href='/' className='text-black font-extrabold p-2 text-3xl font-mono inline-flex gap-2 '><span><FaPaw /></span>PetCompanion</a>
            <ul className='hidden lg:flex items-center gap-10 cursor-pointer '>
                <li className='hidden lg:flex items-center gap-10 cursor-pointer font-mono font-bold'>Home</li>
                <li className='hidden lg:flex items-center gap-10 cursor-pointer font-mono font-bold'>About</li>
                <li className='hidden lg:flex items-center gap-10 cursor-pointer font-mono font-bold'>
                  <Link href='/contacts'>Contact</Link>  </li>
                <li className='hidden lg:flex items-center gap-10 cursor-pointer font-mono pb-1 '><FaUser /></li>
            </ul>

            <Image src={menu} width={20} height={20} className='lg:hidden' />

        </nav>
    )
}

export default Navbar

// <li className='hidden lg:flex items-center gap-10 cursor-pointer font-mono'>Search</li>
//                 <li className='hidden lg:flex items-center gap-10 cursor-pointer font-mono'>About Us</li>
//                 <li className='hidden lg:flex items-center gap-10 cursor-pointer font-mono'>Contact Us</li>
//                 <li className='hidden lg:flex items-center gap-10 cursor-pointer font-mono'>Account</li>
//className='hidden lg:flex items-center gap-10 cursor-pointer font-mono '