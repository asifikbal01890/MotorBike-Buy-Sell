import React from 'react';

const MyOrder = ({book}) => {
    console.log(book)
    const {image, itemName, price} = book
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
                <button className="btn btn-primary btn-sm">pay</button>
            </th>
        </tr>

    );
};

export default MyOrder;