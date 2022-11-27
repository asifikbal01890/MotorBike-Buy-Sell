import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddAProduct = () => {
    const { user } = useContext(AuthContext);
    const datas = useLoaderData();
    console.log(datas)

    const handleAdded = event =>{
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        const condition = form.condition.value;
        const description = form.description.value;
        const picture = form.picture.value;
        const name = form.name.value;
        const resalePrice = form.resalePrice.value;
        const originalPrice = form.originalPrice.value;
        const use = form.use.value;
        const sellerName = form.sellerName.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const info = {
            category,
            name, 
            picture, 
            location, 
            resalePrice, 
            originalPrice, 
            sellerName,
            phone,
            email, 
            description, 
            use, 
            condition
        }
        console.log(info);
    }
    // name, picture, location, resalePrice, originalPrice, time, sellerName, description, use, condition
    return (
        <div className='mt-12 w-1/2'>
            <div>
                <h1 className='text-2xl font-semibold'>Add Your Product For Sale</h1>
            </div>
            <form onSubmit={handleAdded}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Bike Category</span>

                    </label>
                    <select name='category' className="select select-bordered">
                        {
                            datas.map(data => <option>{data.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Bike Condition</span>
                    </label>
                    <select name='condition' className="select select-bordered">
                        <option>excellent</option>
                        <option>good</option>
                        <option>fair</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Describe Your Bike</span>
                    </label>
                    <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Text Here" required></textarea>
                </div>
                <input name='picture' type="file" className="file-input file-input-bordered w-full my-6" required/>
                <input name='name' type="text" placeholder="Your Bike Name" className="input input-bordered w-full" required />
                <input name='resalePrice' type="text" placeholder="Resale Price" className="input input-bordered w-full my-6" required />
                <input name='originalPrice' type="text" placeholder="Original Price" className="input input-bordered w-full " required />
                <input name='use' type="text" placeholder="Age of Bike Used" className="input input-bordered w-full my-6" />
                <input name='sellerName' type="text" placeholder="Your Name" className="input input-bordered w-full" />
                <input name='location' type="text" placeholder="Location" className="input input-bordered w-full my-6" required />
                <input name='phone' type="number" placeholder="Your Phone Number" className="input input-bordered w-full" required />
                <input name='email' type="email" disabled value={user?.email} className="input input-bordered w-full my-6" />
                <button className="btn btn-primary w-full mb-6">ADDED</button>
            </form>
        </div>
    );
};

export default AddAProduct;