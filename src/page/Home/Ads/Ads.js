import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Ads = () => {
  const { data: bikes = [] } = useQuery({
    queryKey: ['bikes'],
    queryFn: async () => {
      const res = await fetch("https://motorbike-buy-sell-server-site.vercel.app/bikes/ads");
      const data = await res.json();
      return data;
    }
  })
  return (
    <div className='mb-8'>
      <h1 className='mb-6 text-center text-3xl font-bold'>Best Bike In Low Price</h1>
      <div>
        {
          bikes.length < 1 ?
            <>
              <p className='text-center text-4xl font-bold text-slate-500'>No Ads Available</p>
            </>
            :
            <>
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Bike Name</th>
                      <th>Price</th>
                      <th>Use of Time</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      bikes.map((bike) => <tr
                        key={bike._id}
                      >
                        <td>{bike.name}</td>
                        <td>TK. {bike.resalePrice}</td>
                        <td>{bike.use}</td>
                        <td>{bike.location}</td>
                      </tr>)
                    }
                  </tbody>
                </table>
              </div>
            </>
        }
      </div>
    </div>
  );
};

export default Ads;