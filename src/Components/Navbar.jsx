import Image from 'next/image'
import React from 'react'
import menu from '../assets/menu.png'
import logo from '../assets/logo.png'
const Navbar = () => {
    return (
        <nav className='flex items-center justify-between text-center text-2xl p-4 bg-purple-400 '>
            <a href='/'><Image src={logo} width={100} height={220} className='h-3xl' /></a>
            <ul className='hidden lg:flex items-center gap-10 cursor-pointer '>
                <li className='border border-black bg-neutral-800 text-white px-4 p-2 rounded-3xl'>Search</li>
                <li className='border border-black bg-neutral-800 text-white px-4 p-2 rounded-3xl'>About Us</li>
                <li className='border border-black bg-neutral-800 text-white px-4 p-2 rounded-3xl'>Contact Us</li>
                <li className='border border-black bg-neutral-800 text-white px-4 p-2 rounded-3xl'>Account</li>
            </ul>

            <Image src={menu} width={20} height={20} className='lg:hidden' />

        </nav>
    )
}

export default Navbar