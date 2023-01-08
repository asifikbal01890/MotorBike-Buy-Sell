import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashBoardLayout from '../../layout/DashBoardLayout/DashBoardLayout';
import Main from '../../layout/Main/Main';
import BikesCollection from '../../page/BikesCollection/BikesCollection';
import Blog from '../../page/Blog/Blog';
import AddAProduct from '../../page/DashBoard/AddAProduct/AddAProduct';
import AllBuyers from '../../page/DashBoard/AllBuyers/AllBuyers';
import AllSellers from '../../page/DashBoard/AllSellers/AllSellers';
import DashBoard from '../../page/DashBoard/DashBoard';
import MyOrders from '../../page/DashBoard/MyOrders/MyOrders';
import MyProducts from '../../page/DashBoard/MyProduct/MyProducts';
import Payment from '../../page/DashBoard/Payment/Payment';
import ReportedItems from '../../page/DashBoard/ReportedItems/ReportedItems';
import Home from '../../page/Home/Home/Home';
import Login from '../../page/LogIn/Login';
import PageNotFound from '../../page/PageNotFound/PageNotFound';
import SignUp from '../../page/SignUp/SignUp';
import AdminRoute from '../AdminRoute/AdminRoute';
import BuyerRoute from '../BuyerRoute/BuyerRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SellerRoute from '../SellerRoute/SellerRoute';





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
                    loader: ({params}) => fetch(`https://motorbike-buy-sell-server-site.vercel.app/categories/${params.id}`),
                    element:<PrivateRoute><BikesCollection></BikesCollection></PrivateRoute>
                }
            ]
        },
        {
            path: "/dashboard",
            element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
            children:[
                {
                    path: "/dashboard",
                    element:<DashBoard></DashBoard>
                },
                {
                    path: "/dashboard/addproduct",
                    loader: () => fetch("https://motorbike-buy-sell-server-site.vercel.app/categories"),
                    element:<SellerRoute><AddAProduct></AddAProduct></SellerRoute>
                },
                {
                    path: "/dashboard/myproduct",
                    element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
                },
                {
                    path: "/dashboard/allsellers",
                    element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
                },
                {
                    path: "/dashboard/allbuyers",
                    element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
                },
                {
                    path: "/dashboard/reporteditems",
                    element:<AdminRoute><ReportedItems></ReportedItems></AdminRoute>
                },
                {
                    path: "/dashboard/myorder",
                    element:<BuyerRoute><MyOrders></MyOrders></BuyerRoute>
                },
                {
                    path: "/dashboard/myorder/:id",
                    loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`),
                    element:<BuyerRoute><Payment></Payment></BuyerRoute>
                }
            ]
        },
        {
            path: "*",
            element: <PageNotFound></PageNotFound>
        }
    ])

export default router;