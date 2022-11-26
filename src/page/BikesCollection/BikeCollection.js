import React from 'react';
import {  FaMapMarkerAlt } from 'react-icons/fa';

const BikeCollection = ({ bike, setProduct }) => {
    const { name, picture, location, resalePrice, originalPrice, time, sellerName } = bike;
    return (
        <div>
            <div className="hero rounded-xl shadow-lg">
                <div className="hero-content flex-col ">
                    <img src={picture} alt='' className="rounded-lg h-48" />
                    <div className=''>
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <div>
                            <h3 className='font-semibold text-lg text-center'>{sellerName}</h3>
                            <div className='flex items-center justify-center'>
                            <FaMapMarkerAlt className='text-primary'></FaMapMarkerAlt>
                            <p className='pl-2'>{location}</p>
                            </div>
                        </div>
                        <div className='text-center font-semibold'>
                        <p>Original Price Tk.{originalPrice}</p>
                        <p>Resale Price Tk.{resalePrice}</p>
                        </div>
                        <p className='text-center text-slate-400'>Post at {time}</p>
                        <div className='flex justify-center mt-4'>
                        <label htmlFor="Book-Modal" className="btn btn-primary flex" onClick={ () => setProduct(bike)}>Book Now</label>
                     
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BikeCollection;