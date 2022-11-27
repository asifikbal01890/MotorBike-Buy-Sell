import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookingModal = ({product, setProduct}) => {
    const {user} = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const userName = form.userName.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const email = form.email.value;

        const booking = {
            itemName: name,
            price,
            userName,
            phone,
            location,
            email,
            image: product.picture
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setProduct(null);
                    toast.success('Booking Confirmed');
                }
                else{
                    toast.error(data.message);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-xl font-semibold text accent'>Booking</h1>
                    <form onSubmit={handleBooking}>
                        <input name='name' type="text" disabled value={product?.name} className="input input-bordered w-full my-6" />
                        <input name='price' type="text" disabled value={product?.resalePrice} className="input input-bordered w-full"/>
                        <input name='userName' type="text" disabled value={user?.displayName} className="input input-bordered my-6 w-full"/>
                        <input name='phone' type="number" placeholder="Your Phone Number" className="input input-bordered w-full" required />
                        <input name='location' type="text" placeholder="Meet Location" className="input input-bordered w-full my-6" required />
                        <input name='email' type="email" disabled value={user?.email} className="input input-bordered w-full" />
                        <button htmlFor="Book-Modal" className="btn btn-primary w-full my-6">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;