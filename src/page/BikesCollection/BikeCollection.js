import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BikeCollection = () => {
    const data = useLoaderData();
    console.log(data.name)
    return (
        <div className='my-16'>
            <h1 className='text-center text-2xl text-accent font-bold'>{data.name}</h1>
        </div>
    );
};

export default BikeCollection;