"use client"
import React from 'react';
import { useSession } from 'next-auth/react';
import Navbar from '@/Components/Navbar';
import axios from 'axios';
import { useState } from 'react';
const Page = () => {
    const { data: session } = useSession();
    const [formData, setFormData] = useState({

        breed: '',
        age: '',
        sex: '',
        contact: '',
        mobile: '',
        petImage: null,
        description: '',
        petType: '',
        price: ''
    });

    const handleFormSubmit = async (event) => {

        event.preventDefault();



        try {
            const response = await axios.post('/api/uploadPets', formData);
            console.log('Data saved:', response.data);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <h1 className='text-3xl font-extrabold text-red-950 pl-7 pt-6'>
                Welcome, {session?.user?.name}
            </h1>
            <div className='flex flex-col items-center justify-center'>
                <div className='w-full max-w-lg p-6 rounded-3xl shadow-2xl shadow-gray-950 mt-9'>
                    <p className='text-center mb-4 font-extrabold text-lg'>List Your Pets</p>
                    <form onSubmit={handleFormSubmit} method='post' className='flex flex-col space-y-4'>
                        <div className='grid grid-cols-2 gap-4'>

                            <div>
                                <label className='text-xl'>Breed</label>
                                <input
                                    type='text'
                                    className='border border-black py-2 px-3 rounded-3xl w-full'
                                    placeholder='Lab / German Shepered'
                                    value={formData.breed}
                                    onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='text-xl'>Age</label>
                                <input
                                    type='text'
                                    className='border border-black py-2 px-3 rounded-3xl w-full'
                                    placeholder='In months/years'
                                    value={formData.age}
                                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-4'>

                            <div>
                                <label className='text-xl'>Sex</label>
                                <input
                                    type='text'
                                    className='border border-black py-2 px-3 rounded-3xl w-full'
                                    placeholder='Male/Female'
                                    value={formData.sex}
                                    onChange={(e) => setFormData({ ...formData, sex: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='text-xl'>Contact</label>
                                <input
                                    type='text'
                                    className='border border-black py-2 px-3 rounded-3xl w-full'
                                    placeholder='Your Address'
                                    value={formData.contact}
                                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-4'>

                            <div>
                                <label className='text-xl'>Mobile No</label>
                                <input
                                    type='text'
                                    className='border border-black py-2 px-3 rounded-3xl w-full'
                                    placeholder='Your Phone Number'
                                    value={formData.mobile}
                                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='text-xl'>Price</label>
                                <input
                                    type='text'
                                    className='border border-black py-2 px-3 rounded-3xl w-full'
                                    placeholder='Offering Price'
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                />

                            </div>
                        </div>

                        <label className='text-xl'>Upload Pet Image</label>
                        <input
                            type='file'
                            className='border border-black py-2 px-3 rounded-3xl w-full'
                            placeholder='Your Address'
                            value={formData.petImage}
                            onChange={(e) => setFormData({ ...formData, petImage: e.target.value })}
                        />

                        <label className='text-xl'>Description</label>
                        <textarea
                            className='border border-black py-2 px-3 h-24 rounded-2xl w-full'
                            placeholder='About pet'
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        ></textarea>

                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <label className='text-xl'>Pet Type</label>
                                <select className='border border-black h-9 rounded-full w-full'
                                    value={formData.petType}
                                    onChange={(e) => setFormData({ ...formData, petType: e.target.value })}>
                                    <option value='Select Pet Type'>Select Pet Type</option>
                                    <option value='cat'>Cat</option>
                                    <option value='dog'>Dog</option>
                                    <option value='bird'>Bird</option>
                                </select>
                            </div>


                        </div>
                        <div className='flex flex-col items-center justify-center pr-24 pl-24'>
                            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-extrabold text-xl py-2 rounded-full w-full '>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;




