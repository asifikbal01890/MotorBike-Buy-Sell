import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookingModal = ({product}) => {
    console.log(product?.name);
    const {user} = useContext(AuthContext);

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="Book-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form>
                        <input name='name' type="text" disabled value={product?.name} className="input input-bordered w-full my-6" />
                        <input name='price' type="text" disabled value={product?.resalePrice} className="input input-bordered w-full"/>
                        <input name='userName' type="text" disabled value={user?.displayName} className="input input-bordered my-6 w-full"/>
                        <input name='phone' type="number" placeholder="Your Phone Number" className="input input-bordered w-full" required />
                        <input name='location' type="text" placeholder="Meet Location" className="input input-bordered w-full my-6" required />
                        <input name='email' type="email" disabled value={user?.email} className="input input-bordered w-full" />
                        <button className="btn btn-accent w-full my-6">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;