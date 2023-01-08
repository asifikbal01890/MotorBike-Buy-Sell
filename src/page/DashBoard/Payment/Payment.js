import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51MKIjmIaxPm6ehs242KIksmXE530ZCBocGPKI9zfQ5zVvnMgn2QrKn0eWRmOaviLoAPLv9nJMSZtkQuxDTDIHhXQ006ZQdegE0');

const Payment = () => {
    const booking = useLoaderData();
    return (
        <div className='mt-16 ml-12'>
            <h1 className='text-3xl font-semibold'>Payment For {booking.itemName}</h1>
            <p className='text-lg'>Please pay <span className='font-bold'>{booking.price} BDT</span> for buy</p>
            <div className='mt-8 w-96'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;