import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main/Main';
import BikesCollection from '../../page/BikesCollection/BikesCollection';
import Blog from '../../page/Blog/Blog';
import DashBoard from '../../page/DashBoard/DashBoard';
import Home from '../../page/Home/Home/Home';
import Login from '../../page/LogIn/Login';
import PageNotFound from '../../page/PageNotFound/PageNotFound';
import SignUp from '../../page/SignUp/SignUp';





    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children:[
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/blog",
                    element: <Blog></Blog>
                },
                {
                    path: "/login",
                    element: <Login></Login>
                },
                {
                    path: "/signUp",
                    element: <SignUp></SignUp>
                },
                {
                    path: "/categories/:id",
                    loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`),
                    element:<BikesCollection></BikesCollection>
                }
            ]
        },
        {
            path: "/dashboard",
            element: <DashBoard></DashBoard>
        },
        {
            path: "*",
            element: <PageNotFound></PageNotFound>
        }
    ])

export default router;