import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { _id, name, picture, description } = category
    return (
        <div className='shadow-md rounded-2xl'>
            <div className="hero ">
                <div className="hero-content text-center">
                    <div className="mb-4">
                        <img className='mx-auto mt-7 mb-8 h-64 w-full' src={picture} alt="" />
                        <h1 className="text-xl font-semibold mb-2">{name}</h1>
                        <p className='px-10'>{description}</p>
                        <Link to={`/categories/${_id}`} className='btn btn-primary w-1/3 mt-6'>See Bikes</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;