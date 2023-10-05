import React from 'react';
import petImage from '../assets/lab.png';
import Image from 'next/image';

const Home = () => {
    return (
        <div className="flex items-center">
            <div className="flex-1">
                <Image src={petImage} width={90} height={90} layout='responsive' />
            </div>


            <div className="flex-1">

                
                <p className="text-lg">
                    Adopt me ! I will be your <span>best companion</span>
                </p>
            </div>
        </div>
    );
};

export default Home;
