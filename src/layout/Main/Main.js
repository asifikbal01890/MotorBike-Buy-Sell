import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import NavBar from '../../shared/NavBar/NavBar';
// 
const Main = () => {
    return (
        <div>
           <div>
           <NavBar></NavBar>
           </div>
           <div className='max-w-[1440px] mx-auto px-5'>
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;