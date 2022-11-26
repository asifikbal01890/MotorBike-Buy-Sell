import React from 'react';
import { FaThemeco } from 'react-icons/fa';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main/Main';
import BikeCollection from '../../page/BikesCollection/BikeCollection';
import Blog from '../../page/Blog/Blog';
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
                    element:<BikeCollection></BikeCollection>
                }
            ]
        },
        {
            path: "*",
            element: <PageNotFound></PageNotFound>
        }
    ])

export default router;