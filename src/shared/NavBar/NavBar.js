import React from 'react';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../Contexts/AuthProvider';

const NavBar = () => {
    // const { user, logOut } = useContext(AuthContext)

    // const handleLogOut = () => {
    // logOut()
    //     .then(() => { })
    //     .catch(err => console.log(err))
    // }
    const menuContent = <React.Fragment>
        <li className='transition-colors ease-in-out hover:text-primary duration-300'><Link to="/">Home</Link></li>
        <li className='transition-colors ease-in-out hover:text-primary duration-300'><Link to="/about">About</Link></li>
        <li className='transition-colors ease-in-out hover:text-primary duration-300'><Link to="/bikes">Bikes</Link></li>
        <li className='transition-colors ease-in-out hover:text-primary duration-300'><Link to="/dashboard">Dashboard</Link></li>
        <li className='transition-colors ease-in-out hover:text-primary duration-300'><Link to="/contactUs">Contact Us</Link></li>
        <li className='btn btn-primary md:flex lg:hidden'><Link to="/login">Login</Link></li>
        {/* {
            user?.uid ? <li><Link onClick={handleLogOut}>Log Out</Link></li>
                :
                <li><Link to="/login">Login</Link></li>
        } */}
    </React.Fragment>
    return (
        <div>
            <div className="navbar bg-base-100 justify-between">
                <div className="navbar-start">
                    <label htmlFor="dashboard-drawer" tabIndex={1} className="btn btn-ghost drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <Link to="/" className="normal-case text-xl font-bold text-accent"><span className='text-primary'>MOTOR</span>CYCLES</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal gap-6 rounded-lg font-semibold text-accent text-lg pr-4">
                        {menuContent}
                    </ul>
                </div>
                
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content dropdown-left mt-3 p-2 shadow bg-base-100 text-center block">
                        {menuContent}
                    </ul>
                </div>
                <button className='btn btn-primary lg:flex md:hidden'><Link to="/login">Login</Link></button>
            </div>
        </div>
    );
};

export default NavBar;