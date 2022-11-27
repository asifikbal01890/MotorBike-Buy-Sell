import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const BikeCollection = ({ bike, setProduct }) => {
    const { name, picture, location, resalePrice, originalPrice, time, sellerName, description, use, condition } = bike;
    return (
        <div>
            <div className="hero shadow-lg rounded-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={picture} alt="" className="md:w-1/2" />
                    <div>
                        <h1 className="text-2xl font-bold text-accent  lg:text-start">{name}</h1>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h3 className='font-semibold text-lg'>{sellerName}</h3>
                                <div className='flex items-center'>
                                    <FaMapMarkerAlt className='text-primary'></FaMapMarkerAlt>
                                    <p className='pl-2'>{location}</p>
                                </div>
                                <h4>Post at {time}</h4>
                            </div>
                            <div>
                                <h4 className='font-semibold'>Use Only {use}</h4>
                                <p className='pt-3'>Bike Condition: <span className='font-semibold text-secondary'>{condition}</span></p>
                            </div>
                        </div>
                        <p className="py-3">{description}</p>
                        <div className='flex items-center justify-between font-semibold'>
                            <p className=''>Original Price: {originalPrice} BDT</p>
                            <p>Resale Price: {resalePrice} BDT</p>
                        </div>
                        <div className='flex justify-center lg:justify-start'>
                        <label htmlFor="booking-modal" className="btn btn-primary flex" onClick={ () => setProduct(bike)}>Book Now</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BikeCollection;