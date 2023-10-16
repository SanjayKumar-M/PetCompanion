"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '@/Components/Navbar';
import axios from 'axios';
import { FaSearch, FaMobile } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { data } from 'autoprefixer';
const Search = () => {
    const [pets, setPets] = useState([]);

    const fetchPets = async () => {
        try {
            const response = await axios.get('/api/uploadPets');
            setPets(response.data);
            console.log('Data retrieved:', response.data);
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    };

    useEffect(() => {
        fetchPets();
    }, []);
    const { data: session } = useSession();
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-5">
                <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search pets..."
                            className="px-4 py-2 border border-gray-300 rounded-l-full w-32 sm:w-48 focus:outline-none"
                        />
                        <div className="absolute top-0 right-0 h-full flex items-center justify-center">
                            <FaSearch />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pets.map((pet, index) => (
                        <div key={index} className="shadow-lg p-6 rounded-xl bg-gray-100">
                            <img src={pet.petImage} alt={pet.breed} className="w-full h-40 object-cover mb-4 rounded-t-xl" />
                            
                            <h2 className="text-xl font-bold mb-2">{pet.breed}</h2>
                            <p className="font-extrabold">Rs. {pet.price}</p>
                            <p className="text-sm">{pet.description}</p>
                            <p className="text-sm mb-4">{pet.age} years old</p>

                            <p className="text-gray-500 flex items-center mb-4"><FaMobile className="mr-2" /> {pet.mobile}</p>
                            <p className="text-gray-500 mb-4">{pet.contact}</p>
                            <p className="text-gray-500 mb-2">{pet.petType}</p>
                            
                            <p className='font-extrabold'>{session?.user?.name}</p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                                Message to Know More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
