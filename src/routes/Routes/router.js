import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashBoardLayout from '../../layout/DashBoardLayout/DashBoardLayout';
import Main from '../../layout/Main/Main';
import BikesCollection from '../../page/BikesCollection/BikesCollection';
import Blog from '../../page/Blog/Blog';
import AddAProduct from '../../page/DashBoard/AddAProduct/AddAProduct';
import AllBuyers from '../../page/DashBoard/AllBuyers/AllBuyers';
import AllSellers from '../../page/DashBoard/AllSellers/AllSellers';
import MyOrders from '../../page/DashBoard/MyOrders/MyOrders';
import MyProducts from '../../page/DashBoard/MyProduct/MyProducts';
import Home from '../../page/Home/Home/Home';
import Login from '../../page/LogIn/Login';
import PageNotFound from '../../page/PageNotFound/PageNotFound';
import SignUp from '../../page/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';





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
                    element:<PrivateRoute><BikesCollection></BikesCollection></PrivateRoute>
                }
            ]
        },
        {
            path: "/dashboard",
            element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
            children:[
                {
                    path: "/dashboard/addproduct",
                    loader: () => fetch("http://localhost:5000/categories"),
                    element:<AddAProduct></AddAProduct>
                },
                {
                    path: "/dashboard/myproduct",
                    element:<MyProducts></MyProducts>
                },
                {
                    path: "/dashboard/allsellers",
                    element:<AllSellers></AllSellers>
                },
                {
                    path: "/dashboard/allbuyers",
                    element:<AllBuyers></AllBuyers>
                },
                {
                    path: "/dashboard/myorders",
                    element:<MyOrders></MyOrders>
                }
            ]
        },
        {
            path: "*",
            element: <PageNotFound></PageNotFound>
        }
    ])

export default router;