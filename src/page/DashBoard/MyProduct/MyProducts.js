import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext);

    const {data:bikes = []} = useQuery({
        queryKey: ['bikes'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/mybikes`);
            const data = await res.json();
            return data;
        }   
    })
    return (
        <div>
            {
                bikes.map(bike=>console.log(bike))
            }
        </div>
    );
};

export default MyProducts;