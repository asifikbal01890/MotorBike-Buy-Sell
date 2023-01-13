import React from 'react';

const MyOrder = ({book}) => {

    const {_id, image, itemName, price, paid} = book
    
    const handlePayButton= id =>{
        fetch(`http://localhost:5000/bookings/payment/${id}`, {
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data.url);
            })
    } 
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
                        <div className="text-sm opacity-50">Price: {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price)} BDT</div>
                    </div>
                </div>
            </td>
            <th>
                {
                    paid?<>
                    <p className="text-green-500">Paid</p>
                    </>
                    :
                    <>        
                    <button onClick={()=>handlePayButton(_id)} className="btn btn-primary btn-sm">pay</button>
                    </>
                }
            </th>
        </tr>

    );
};

export default MyOrder;