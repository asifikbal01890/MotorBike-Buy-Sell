import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({book}) => {
    console.log(book)
    const {_id, image, itemName, price} = book
    return (

        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{itemName}</div>
                        <div className="text-sm opacity-50">Price: {price} BDT</div>
                    </div>
                </div>
            </td>
            <th>
                <Link to={`/dashboard/myorder/${_id}`}><button className="btn btn-primary btn-sm">pay</button></Link>
            </th>
        </tr>

    );
};

export default MyOrder;