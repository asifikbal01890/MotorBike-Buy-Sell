import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryCards = () => {
    const {data:categories = [],} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/categories");
            const data = await res.json();
            return data;
        }   
    })
    return (
        <div className='mt-16'>
            <div>
                <h1 className='text-primary text-2xl text-center font-semibold'>Motorcycle Categories</h1>
            </div>
            <div className='mt-6 grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categories.map(category => <CategoryCard
                    key={category._id}
                    category={category}
                ></CategoryCard>)
            }
        </div>
        </div>
    );
};

export default CategoryCards;