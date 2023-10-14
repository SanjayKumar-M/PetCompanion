import React from 'react';
import Image from 'next/image';
import homedog from '../assets/homedog.jpg'
import family from '../assets/family.png'
import '../../src/app/globals.css'
const Home = () => {

    return (

        <div className=''>
            <div>
                Welcome to PetCompanion Where Every Tail Wags and Every Heart Purrs!
            </div>
            <div>
                <Image src={family} width={96} height={96} className='h-96 w-96 ' />
            </div>

        </div>

    );

};

export default Home;
