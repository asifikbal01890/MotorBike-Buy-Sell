import React from 'react';

const Section = () => {
    return (
        <div>
            <div className='my-28 shadow-lg py-10 rounded-2xl'>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://www.fortunaadvisors.com.au/wp-content/uploads/2019/09/Buy-Sell-Business.-e1568788719979.jpg" className="rounded-lg w-[458px]" alt='' />
                        <div className='lg:pl-24'>
                            <h1 className="text-5xl font-bold text-accent">Best Deal With Safety</h1>
                            <p className="py-6">Motorcycle is a platform on which you can buy and sell bikes! We help people buy and sell bike with best deal. With our solutions are built to be safe, smart, and convenient for our customers.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;