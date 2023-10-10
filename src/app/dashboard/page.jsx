"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import Navbar from '@/Components/Navbar';

const page = () => {
    const { data: session, status } = useSession();
    
        return (

            <div>
                <Navbar />
                <h1>{session?.user?.name}</h1>
                <h1>{session?.user?.email}</h1>

            </div>
        )
    
}


export default page