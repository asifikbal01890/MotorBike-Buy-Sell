import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BikeCollection from './BikeCollection';
import BookingModal from './BookingModal';

const BikesCollection = () => {
    const [product, setProduct] = useState(null);
    const data = useLoaderData();
    const id = data._id;

    const {data:bikes = []} = useQuery({
        queryKey: ['bikes', id],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bikes?id=${id}`);
            const data = await res.json();
            return data;
        }   
    })
    return (
        <div className='my-16'>
            <h1 className='text-center text-2xl text-accent font-bold'>{data.name}</h1>
            <div className='mt-6 grid gap-9'>
                {
                    bikes.map(bike => <BikeCollection
                        key={bike._id}
                        bike={bike}
                        setProduct={setProduct}
                    ></BikeCollection>)
                }
            </div>
            <BookingModal
                product={product}
                setProduct={setProduct}
            ></BookingModal>
        </div>
    );
};

export default BikesCollection;