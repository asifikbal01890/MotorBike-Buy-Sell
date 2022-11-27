import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import MyProduct from './MyProduct';


const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bikes/my?email=${user?.email}`;

    const { data: bikes = [] } = useQuery({
        queryKey: ['bikes', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='mt-8'>
            {
                bikes.map(bike=><MyProduct
                    key={bike._id}
                    bike={bike}
                ></MyProduct>)
            }
        </div>
    );
};

export default MyProducts;