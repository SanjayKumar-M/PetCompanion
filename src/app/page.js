import Navbar from '@/Components/Navbar'
import Home from '@/Components/Home'
import React from 'react'

const Page = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'>
      <Navbar />
      <Home />
    </div>
  )
}

export default Page