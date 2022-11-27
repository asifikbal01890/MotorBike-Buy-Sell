import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useBuyer from '../../Hooks/useBuyer';
import useSeller from '../../Hooks/useSeller';
import NavBar from '../../shared/NavBar/NavBar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {
                            isSeller && <>
                                <li><Link to={"/dashboard/addproduct"}>Add A Product</Link></li>
                                <li><Link to={"/dashboard/myproduct"}>My Products</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to={"/dashboard/allsellers"}>All Sellers</Link></li>
                                <li><Link to={"/dashboard/allbuyers"}>All Buyers</Link></li>
                            </>
                        }
                        {
                            isBuyer && <>
                            <li><Link to={"/dashboard/myorders"}>My orders</Link></li>
                            </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;