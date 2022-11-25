import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <div className='banner'>
                    <img className='' src="https://www.inmoto.com/i/?item_id=128&item_type=banner&item_size=banner&hash=38b8c31d5de546aa9f29971f3866ce35" alt="" />
                </div>
                <div className='absolute top-[20%] right-[6%] text-white text-left w-[38%] hidden lg:block'>
                    <h4 className='font-medium xl:text-xl text-lg'>Welcome To <span className='text-primary'>MOTOR</span>CYCLES</h4>
                    <h1 className='font-bold xl:text-5xl text-4xl xl:py-6 py-3'>Sell Your Old Bike</h1>
                    <h1 className='font-bold xl:text-5xl text-4xl'>Buy Your Dream Bike</h1>
                    <p className='py-6 hidden xl:block'>
                    <span>BS MOTORCYCLE</span> is a global online marketplace where you can buy and sell your bikes online. Use this marketplace and sell your old model motorcycle and buy your dream motorcycle.
                    </p>
                    <p className='xl:hidden block py-3'><span>BS MOTORCYCLE</span> is a global online marketplace where you can buy and sell your bikes online. </p>
                    <button className='btn btn-primary mt-4'>Bike Showroom</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;