import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import HomeLayout from "../layouts/HomeLayout";
import BrandsPage from "../components/Pages/BrandsPage";
import CouponPage from "../components/Pages/CouponPage";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import Profile from "../components/Pages/Profile";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../components/Pages/UpdateProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomeLayout />,
                loader: () => fetch('/public/data.json'),
            },
            {
                path: '/brands',
                element: <BrandsPage />,
            },
            {
                path: '/brand/:id',
                element: <PrivateRoute> <CouponPage /></PrivateRoute>,
                loader: ({ params }) => fetch(`/public/data.json`).then(res => res.json()).then(data => data.find(brand => brand._id === params.id)),
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: '/update-profile',
                element: <PrivateRoute><UpdateProfile /></PrivateRoute>
            },
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            },



        ]

    }
])

export default router;