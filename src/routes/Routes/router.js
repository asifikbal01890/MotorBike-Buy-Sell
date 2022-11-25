import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main/Main';
import Home from '../../page/Home/Home/Home';





    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children:[
                {
                    path: "/",
                    element: <Home></Home>
                },
            //     {
            //         path: "/about",
            //         element: <About></About>
            //     },
            //     {
            //         path: "/appointment",
            //         element: <Appointment></Appointment>
            //     },
            //     {
            //         path: "/contactUs",
            //         element: <ContactUs></ContactUs>
            //     },
            //     {
            //         path: "/login",
            //         element: <Login></Login>
            //     },
            //     {
            //         path: "/signUp",
            //         element: <SignUp></SignUp>
            //     },
            ]
        }
    ])

export default router;