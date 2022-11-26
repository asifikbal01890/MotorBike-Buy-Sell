import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../../shared/NavBar/NavBar';

const DashBoardLayout = () => {
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
                      
                        <li><Link to={"/dashboard/addproduct"}>Add A Product</Link></li>
                        <li><Link to={"/dashboard/myproduct"}>My Products</Link></li>
                        <li><Link to={"/dashboard/allsellers"}>All Sellers</Link></li>
                        <li><Link to={"/dashboard/allbuyers"}>All Buyers</Link></li>
                        <li><Link to={"/dashboard/myorders"}>My orders</Link></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;